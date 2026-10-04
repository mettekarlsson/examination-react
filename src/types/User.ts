export interface User {
    id: number;
    username: string;
    profile: Profile;
    settings: Settings;
    roles: string[];
}

export interface Profile {
    name: string;
    email: string;
    address: Address;
}

export interface Address {
    street: string;
    city: string;
    zipCode: string;
}

export interface Settings {
    theme: string;
    notifications: Notifications;
}

export interface Notifications {
    email: boolean;
    push: boolean;
}
