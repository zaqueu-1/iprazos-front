import { Contact } from "../../app/types"

export interface ContactsPanelProps {
    handleDelete: (id: string) => void
    handleEdit: (id: string) => void
    filteredContacts: Contact[]
    search: string
    openModal: boolean
    openEdit: boolean
    loading: boolean
}