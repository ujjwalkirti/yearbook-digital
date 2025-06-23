export interface YearbookEntry {
    id: string;
    student_name: string;
    roll_number: string;
    class: string;
    profile_photo_url: string;
    about_me: string;
    achievements: string;
    clubs_and_teams: string[]; // or Record<string, any> if using JSON
    favorite_memories: string;
    future_plans: string;
    message_to_friends?: string;
    message_to_school?: string;
    created_at: string; // ISO string or Date
    updated_at: string; // ISO string or Date
}


export type MediaType = 'image' | 'video';

export interface GalleryItem {
    id: string;
    yearbook_entry_id: string;
    media_url: string;
    caption?: string;
    media_type: MediaType;
    uploaded_at: string;
}


export interface Event {
    id: string;
    title: string;
    description: string;
    event_date: string; // ISO string or Date
    media_urls: string[]; // URLs of images/videos
    created_at: string;
}

export interface Autograph {
    id: string;
    yearbook_entry_id: string;
    author_name: string;
    author_photo_url?: string;
    message: string;
    written_at: string;
}


export interface Comment {
    id: string;
    yearbook_entry_id: string;
    commenter_name: string;
    commenter_photo_url?: string;
    content: string;
    posted_at: string;
}
