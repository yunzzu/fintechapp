const Profile = (props) => {
    console.log(props);
    return <h6>Hi, {props.username}({props.grade})!</h6>
  }

  export default Profile;