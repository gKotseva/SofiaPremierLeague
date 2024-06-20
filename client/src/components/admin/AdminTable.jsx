import React, { useContext, useState } from 'react';
import { AdminContext } from './AdminContext';
import ImageModal from '../modals/ImageModal';
import './Admin.modules.css';

const AdminTable = () => {
    const { data, headers, dataType } = useContext(AdminContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalPath, setModalPath] = useState('');

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (path) => {
        setModalPath(path);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const renderPagination = () => {
        const pageNumbers = [];
        const totalPages = Math.ceil(data.length / itemsPerPage);

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage > totalPages - 3) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pageNumbers.map((number, index) => (
            <button
                key={index}
                onClick={() => paginate(number)}
                disabled={number === '...'}
                className={number === currentPage ? 'active' : ''}
            >
                {number}
            </button>
        ));
    };

    const getCellContent = (item, header) => {
        switch (header) {
            case 'Снимка':
                return (
                    <button onClick={() => openModal(item.logo_image || item.image || '/image.png')}>
                        <img src={item.image || item.logo_image || '/image.png'} alt="image" />
                    </button>
                );
            case 'Номер':
                return item.player_number || '';
            case 'Име':
                return item.name || item.team_name || item.manager_name || '';
            case 'Отборна снимка':
                return (
                    <button onClick={() => openModal(item.team_image || '/image.png')}>
                        <img src={item.team_image || '/image.png'} alt="team image" />
                    </button>
                );
            case 'Позиция':
                return item.position_name;
            case 'Отбори':
                return item.teams;
            default:
                return item[header.toLowerCase()] || '';
        }
    };

    return (
        <div className="main-table">
            <table className={`table-${dataType}`}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            {headers.map((header, headerIndex) => (
                                <td key={headerIndex}>{getCellContent(item, header)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='pagination'>
                {renderPagination()}
            </div>
            <ImageModal isOpen={isModalOpen} onClose={closeModal} path={modalPath} />
        </div>
    );
};

export default AdminTable;
