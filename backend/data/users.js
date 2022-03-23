import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@myshop.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true, 
    },
    {
        name: 'Leo',
        email: 'leo@myshop.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Cristiano',
        email: 'cristiano@myshop.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users