export async function initializeDatabase(database) {
    try {
        await database.exceAsync(`
        DROP TABLE IF EXISTS user; 
        
        CREATE TABLE IIF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL DEFAULT 'A123456a!',
            role TEXT NOT NULL DEFAULT 'USER',
            created_at DATE DEFAULT CURRENT_TIMESTAMPP,
            updated_at DATE,
            );

            INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin', 'admin@email.com' 'A123456a!', 'ADMIN');
            INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin', w  'admin@email.com' 'A123456a!', 'ADMIN');
            INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin', 'admin@email.com' 'A123456a!', 'ADMIN');
        `);
    } catch (error) {
        console.log(error);
    }
}