const db = require('../data/database');

class Staff {
    constructor(name, email, role, bio) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.bio = bio;
    }

    static async fetchAllStaff() {
/*         const query = `
        SELECT staff.*, staff.name AS staff_name FROM staff 
        INNER JOIN staff ON staff.idstaff = company.staff_id 
        `;     */
        const query = `
        SELECT * FROM staff
        `;

        const [staffs] = await db.getDb().query(query);
        return staffs;
    }

    /*     static async fetchAllStaff() {
            const [staffs] = await db.getDb().query('SELECT * FROM staff');
            return staffs;
        } */

    /*     async fetchSingleStaff() {
            if (!this.id) {
                return;
            }
    
            const query = `
            SELECT company.*, staff.name AS staff_name, staff.email AS staff_email FROM company
            INNER JOIN staff ON company.staff_id = staff.idstaff
            WHERE company.idCompany = ?
            `;
    
            const [posts] = await db.getDb().query(query, [this.id]);
            return posts;
        } */

/*     async fetchStaffEdit() {
        const query = `
        SELECT * FROM company WHERE idCompany = ?
      `;
        const [posts] = await db.getDb().query(query, [this.id]);
        return posts;
    } */

    async saveCreate() {
        const data = [
            this.name,
            this.email,
            this.role,
            this.bio,
        ];

        const result = await db.getDb().query('INSERT INTO staff (name, email, role, bio) VALUES (?)', [
            data,
        ]);
        return result;
    }

/*     async saveEdit() {
        const query = `
            UPDATE company SET title = ?, summary = ?, body = ?
            WHERE idCompany = ?
          `;

        const result = await db.getDb().query(query, [
            this.title,
            this.summary,
            this.body,
            this.id,
        ]);
        return result;
    }

    async delete() {
        if (!this.id) {
            return;
        }

        const result = await db.getDb().query('DELETE FROM company WHERE idCompany = ?', [this.id]);
        return result;
    } */

}

module.exports = Staff;