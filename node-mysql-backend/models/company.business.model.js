const db = require('../data/database');

class Company {
    constructor(title, summary, body, id) {
        this.title = title;
        this.summary = summary;
        this.body = body;
        this.id = id;
    }

    static async fetchAllCompany() {
        const query = `
        SELECT company.*, staff.name AS staff_name FROM company 
        INNER JOIN staff ON company.staff_id = staff.idstaff
      `;

        const [posts] = await db.getDb().query(query);

        /* return posts.map(function (posts) {
            return new posts(posts.title, posts.summary, posts.body, posts.id);
        }); */
        return posts;
    }

    static async fetchAllStaff() {
        const [staffs] = await db.getDb().query('SELECT * FROM staff');
        return staffs;
    }

    async fetchCompany() {
        if (!this.id) {
            return;
        }

        const query = `
        SELECT company.*, staff.name AS staff_name, staff.email AS staff_email FROM company
        INNER JOIN staff ON company.staff_id = staff.idstaff
        WHERE company.idCompany = ?
        `;

        const [posts] = await db.getDb().query(query, [this.id]);
        /* return posts.map(function(post){
            return new Company(post.title,post.summary,post.body,post.id);
        }); */
        return posts;
    }

    async fetchCompanyEdit() {
        const query = `
        SELECT * FROM company WHERE idCompany = ?
      `;
        const [posts] = await db.getDb().query(query, [this.id]);
        return posts;
    }

    // if else check not working for some reason...
    /* async save() {

        let result;

        if (this.id) {
            const query = `
                    UPDATE company SET title = ?, summary = ?, body = ?
                    WHERE idCompany = ?
                  `;

            result = await db.getDb().query(query, [
                this.title,
                this.summary,
                this.body,
                this.id,
            ]);

        } else {
            const data = [
                this.title,
                this.summary,
                this.body,
                this.id,
            ];

            result = await db.getDb().query('INSERT INTO company (title, summary, body, staff_id) VALUES (?)', [
                data,
            ]);
        }

        return result;
    } */

    async saveCreate() {
        const data = [
            this.title,
            this.summary,
            this.body,
            this.id,
        ];

        const result = await db.getDb().query('INSERT INTO company (title, summary, body, staff_id) VALUES (?)', [
            data,
        ]);
        return result;
    }

    async saveEdit() {
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
    }

}

module.exports = Company;