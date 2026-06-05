import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "15m",
        }
    );
};

export default generateAccessToken;