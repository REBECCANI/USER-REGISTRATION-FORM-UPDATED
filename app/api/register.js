import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fname, lname, email, password } = req.body;

<<<<<<< HEAD
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Ruramira0306!', 
      database: 'user_registration'
    });

=======
    
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Ruramira0306!',
      database: 'user_registration'
    });

    
>>>>>>> origin/main
    try {
      const [rows] = await connection.execute(
        'INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)',
        [fname, lname, email, password]
      );
      res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Registration failed!' });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
