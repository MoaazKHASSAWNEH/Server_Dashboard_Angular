export interface SupportTicket {
    id: string; 
    title: string;
    request: string;
    status: 'open' | 'closed';
}