export type TClub = {
    clubId: number;
    name: string;
    imageUrl: string;
    description: string;
    category: string;
    hashtags: string[];
};

export type TClubResponse = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: TClub[] | null;
};

export type TClubCategory = 'STUDY' | 'ART' | 'SPORT' | 'RELIGION'; 