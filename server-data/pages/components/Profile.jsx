import css from "styled-jsx/css";
import {GoMail, GoOrganization, GoLink, GoLocation} from "react-icons/go";

const style = css`
    .profile-box {
        width:25%;
        max-width:272px;
        margin-right:26px;
    }
    .profile-image-wrapper {
        width:100%;
        border:1px solid black;
    }
    .profile-image-wrapper .profile-image {
        display: block;
        width:100%;
    }
    .profile-username {
        margin:0;
        padding-top: 16px;
        font-size:26px;
    }
    .profile-user-login {
        margin:0;
        font-size:20px;
    }
    .profile-user-bio {
        margin:0;
        padding-top:16px;
        font-size:14px;
    }
    .profile-user-info {
        display:flex;
        align-items: center;
        margin: 4px 0 0;
    }
    .profile-user-info-text {
        margin-left: 6px;
    }
`;

const Profile=({user})=>{
    if(!user){
        console.log('No user');
        return null;
    }
    return(
        <>
            <div className="profile-box">
                <div className="profile-image-wrapper">
                    <img
                        className="profile-image"
                        src={user.avatar_url}
                        alt={`${user.name} 프로필 이미지`}
                    />
                </div>
                <h2 className="profile-username">{user.name}</h2>
                <p className="profile-user-login">{user.login}</p>
                <p className="profile-user-bio">{user.bio}</p>
                <p className="profile-user-info">
                    <GoLocation size={16} color="#6a737d" />
                    <span className="profile-user-info-text">{user.location? user.location:"지역이 등록되지 않았습니다."}</span>
                </p>
                <p className="profile-user-info">
                    <GoMail size={16} color="#6a737d" />
                    <span className="profile-user-info-text">{user.email? user.email:"등록된 이메일이 없습니다!"}</span>
                </p>
                <p className="profile-user-info">
                    <GoLink size={16} color="#6a737d" />
                    <span className="profile-user-info-text">{user.blog? user.blog:"등록된 블로그가 없습니다!"}</span>
                </p>
            </div>
            <style jsx>{style}</style>
        </>
    )
}

export default Profile;
