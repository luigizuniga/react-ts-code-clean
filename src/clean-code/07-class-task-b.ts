(()=>{
    //* Aplicar el principio de responsabilidad unica
    //* Priorizar la composicion frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;
        
        constructor({ id, type } : HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }


    interface InputAttributesProps {
        value: string;
        placeholder: string;
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;

        constructor ({ value, placeholder } : InputAttributesProps ) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        constructor() {}
        setFocus(){}
        setValue(){}
        isActive(){}
        removeValue(){}
    }

    interface InputElementProps {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }

    //? Idea para la nueva clase InputElement
    class InputElement {

        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor({ 
            id,
            type,
            value,
            placeholder
        } : InputElementProps ){
            this.html = new HtmlElement({id, type });
            this.attributes = new InputAttributes({value,placeholder});
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement({
            id: 'Luigi',
            placeholder: 'Enter first name',
            type: 'input',
            value: 'txtName',
        });

    console.log({ nameField });
})()