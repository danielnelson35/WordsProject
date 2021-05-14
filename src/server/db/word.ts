import { Connection } from "./index";

export const get = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * FROM entries.entries ORDER BY RAND() LIMIT 1', (err, results) => {
            if (err) {
                return reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export default {
    get
}