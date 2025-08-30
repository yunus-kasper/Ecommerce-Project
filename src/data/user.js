// user.js (Dummy User Data)

const users = [
  {
    _id: "64f1a2b9cde123456789abcd",
    name: "John Doe",
    email: "john.doe@example.com",
    password: "hashedpassword123", // Normally hashed, but here it's just a placeholder
    isVerified: true,
    role: "user",
    profileImage: "/images/profile1.jpg",
    dateOfBirth: "1995-07-21",
    gender: "male",
    alternateMobile: "9876543210",
    createdAt: "2025-08-15T10:00:00Z",
    updatedAt: "2025-08-25T15:00:00Z",
  },
  {
    _id: "64f1a2b9cde123456789abce",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "hashedpassword456",
    isVerified: false,
    role: "admin",
    profileImage: "/images/profile2.jpg",
    dateOfBirth: "1990-02-10",
    gender: "female",
    alternateMobile: "9123456780",
    createdAt: "2025-08-10T08:30:00Z",
    updatedAt: "2025-08-22T14:20:00Z",
    profileImage:"/name1.jpg"
  },
  {
    _id: "64f1a2b9cde123456789abcf",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    password: "hashedpassword789",
    isVerified: true,
    role: "user",
    profileImage: "/images/profile3.jpg",
    dateOfBirth: "1988-11-05",
    gender: "male",
    alternateMobile: "9988776655",
    createdAt: "2025-08-12T09:15:00Z",
    updatedAt: "2025-08-24T13:45:00Z",
  },
];

export default users;
