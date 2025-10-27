export interface HallInput {
    name: string;
    capacity: number;
    seats: {
        row: number;
        number: number;
        isVip?: boolean;
    }[];
}