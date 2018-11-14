export class User {

    createdAt: string;
    updatedAt: string;
    user_birthdate: string;
    user_cv_file: string;
    user_description: string;
    user_driver_licence_file: string;
    user_experience: string;
    user_gender: string;
    user_happiness_point: number;
    user_identity_card_file: string;
    user_incapacity: string;
    user_involvement_point: number
    user_last_login: string;
    user_mail: string;
    user_name: string;
    user_nickname: string;
    user_phone: string;
    user_rights: string;
    user_role: string;
    user_social_security_card_file: string;
    user_social_security_card_number: string;
    user_surname: string;
    user_teeshirt_size: string;
    user_trust_point: number;

    constructor(createdAt?: string, updatedAt?: string, user_birthdate?: string, 
        user_cv_file?: string, user_description?: string, user_driver_licence_file?: string, user_experience?: string,
        user_gender?: string, user_happiness_point?: number,user_identity_card_file?: string,user_incapacity?: string,
        user_involvement_point?: number, user_last_login?: string, user_mail?: string, user_name?: string, user_nickname?: string,
        user_phone?: string, user_rights?: string, user_role?: string, user_social_security_card_file?: string, user_social_security_card_number?: string,
        user_surname?: string, user_teeshirt_size?: string, user_trust_point?: number) {
            this.createdAt = createdAt;
            this.updatedAt = updatedAt;
            this.user_birthdate = user_birthdate;
            this.user_cv_file = user_cv_file;
            this.user_description = user_description;
            this.user_driver_licence_file = user_driver_licence_file;
            this.user_experience = user_experience;
            this.user_gender = user_gender;
            this.user_happiness_point = user_happiness_point;
            this.user_identity_card_file = user_identity_card_file;
            this.user_incapacity = user_incapacity;
            this.user_involvement_point = user_involvement_point;
            this.user_last_login = user_last_login;
            this.user_mail = user_mail;
            this.user_name = user_name;
            this.user_nickname = user_nickname;
            this.user_phone = user_phone;
            this.user_rights = user_rights;
            this.user_role = user_role;
            this.user_social_security_card_file = user_social_security_card_file;
            this.user_social_security_card_number = user_social_security_card_number;
            this.user_surname = user_surname;
            this.user_teeshirt_size = user_teeshirt_size;
            this.user_trust_point = user_trust_point;
      }

}