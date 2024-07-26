import { FormSelector } from "./AdminHomeFormSelector";
import { AdminForms } from "./AdminHomeForms";
import { Matches } from "./AdminHomeMatches";
import { AdminStats } from "./AdminHomeStats";

export function AdminHome () {
    return (
        <>
            <AdminStats />
            <AdminForms />
            <Matches />
        </>
    )
}