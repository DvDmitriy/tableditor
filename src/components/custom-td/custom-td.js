import React, { Component } from "react";
import "./custom-td.css";

export default class CustomTD extends Component {
    state = {
        id: "",
        value: "",
        input: false,
        update: false
    };

    changeStateInput = input => {
        this.setState({
            input: input
        });
    };


    render() {
        const { id, type, color, cellState, action, range} = this.props;
        let { value, changeCeill, counter } = this.props;

        return (
            <td
                id={id}
                type={type}
                style={{ backgroundColor: color }}
                state={cellState}
                action={action}
                onDoubleClick={() =>
                    action === "input" &&
                    this.state.input === false &&
                    counter === 0 &&
                    this.setState({
                        input: true,
                    }, () => this.props.changeCounter(++counter))
                }
            >
                <>
                    {this.state.input ? (
                        <InputValue
                            id={id}
                            type={type}
                            value={value}
                            input={this.state.input}
                            counter={counter}
                            changeCounter={this.props.changeCounter}
                            changeStateInput={this.changeStateInput}
                            setValue={changeCeill}
                        />
                    ) : (
                        this.state.value || value
                    )}
                </>
            </td>
        );
    }
}

class InputValue extends Component {
    state = {
        id: "",
        value: "",
        input: true
    };
    saveValue = (e, id) => {
        e.preventDefault(e);
        const newValue = e.target.elements.newInput.value;

        this.setState(
            {
                id: id,
                value: newValue,
                input: false
            },
            () => this.rewritePropsValues()
        );
    };

    rewritePropsValues = () => {
        this.props.changeCounter(this.props.counter - 1);
        this.props.changeStateInput(this.state.input);
        this.props.setValue(this.state.value);
    };
    render() {
        let { id, type, value } = this.props;
        if (value === "") {
            value = undefined;
        }

        return this.state.input ? (
            <form onSubmit={e => this.saveValue(e, id)}>
                <input
                    type={type}
                    defaultValue={value}
                    name="newInput"
                    autoFocus
                    min="0"
                    max="10000"
                    step="1"
                    size="15"
                    maxLength="5"
                />
            </form>
        ) : (
            this.state.value
        );
    }
}

