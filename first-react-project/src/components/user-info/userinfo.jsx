import React from 'react';


const divStyle = {
    'margin': '20px 0',
	'padding': '0',
	'height': '0',
    'width': '15%',
	'border': 'none',
	'border-bottom': '1px solid #333'
}
const divMargin = {
    'margin-left': '20px'
}


class UserInfo extends React.Component{
    render() {
        console.log(this.props);
        const {userName, userGender, userAge, userWorked} = this.props;

        return (
            <div style={divMargin}>
            <p>Имя: {userName}</p>
            <p>Пол: {userGender}</p>
            <p>Возраст: {userAge}</p>
            <p>Работает лет: {userWorked}</p>
            <div ><hr style={divStyle}></hr></div>
            </div>
        )
    }
}


export default UserInfo;



// export const  UserInfo = ({userName, userGender, userAge, userWorked}) => {
//     return (
//         <div style={divStyle}>
//         <p>Имя: {userName}</p>
//         <p>Пол: {userGender}</p>
//         <p>Возраст: {userAge}</p>
//         <p>Работает лет: {userWorked}</p>
//         </div>
//     )
// }


