import React from 'react';


class FormInput extends React.Component{
    render() {
        console.log(this.props);
        const {labelText, inputType} = this.props;



        return (
        <div>
            <label>
            {labelText}
                <input type={inputType} />
            </label>
        </div>
            )
    }
}

export default FormInput;