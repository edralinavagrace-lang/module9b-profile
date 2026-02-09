function UserProfile() {
    const userName = "Ava Edralin";
    const userBio = "Part-time Retail Manager with 5+ years of experience in customer service and inventory management.";
    const profileImageUrl = "https://online.smc.edu/images/thumbnails/15661490/Er68yLgAu492FgIeTIqH1Vem7ElEIrArhn1aXcmy";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '300px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '3px solid #007bff',
};

const nameStyle = {
    margin: '0 0 5px 0',
    color: '#333',
    fontSize: '1.5rem',
};

const bioStyle = {
    margin: '0',
    color: '#666',
    fontSize: '0.9rem',
    textAlign: 'center',
};

return (
    <div style={containerStyle}>
        <img src={profileImageUrl} alt={`${userName}'s profile`} style={imageStyle} />
        <h1 style={nameStyle}>{userName}</h1>
        <p style={bioStyle}>{userBio}</p>
    </div>
);
};

export default UserProfile;