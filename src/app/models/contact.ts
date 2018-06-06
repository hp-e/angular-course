export interface Contact {
    id: number;
    firstName: string;
    lastName: string;

    remark?: string;
    phone?: string;
    email?: string;
    company?: string;
    contactType?: number;

    isFav?: boolean;
}

