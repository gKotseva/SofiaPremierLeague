import { FormSelector } from "./AdminHomeFormSelector";
import { AdminForms } from "./AdminHomeForms";
import { AdminStats } from "./AdminHomeStats";

export function AdminHome () {
    return (
        <>
            <AdminStats />
            <AdminForms />
        </>
    )
}