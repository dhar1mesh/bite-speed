interface PrimaryContact{
    phoneNumber?: string,
    email?: string,
    id?: string
}


interface Contact {
    id: number;
    phoneNumber: string;
    email: string;
    linkedId: number | null;
    linkPrecedence: 'secondary' | 'primary';
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  }

  interface ConsolidatedContact {
    primaryContactId: number;
    emails: string[];
    phoneNumbers: string[];
    secondaryContactIds: number[];
  }