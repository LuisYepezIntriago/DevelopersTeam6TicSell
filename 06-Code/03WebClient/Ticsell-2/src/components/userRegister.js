import React from "react";

const UserRegister = ({user, setUser}) => {

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }

    let {customer, name, lastname, birthday, address, city, phone} = user;

    const handleSubmit = () => {
        customer = parseInt(customer);
        phone = parseInt(phone);

        if (customer === "" || name === "" || lastname === "" || birthday === "" || address === "" || city === "" || phone === "") {
            alert("Todos los campos son obligatorios");
            return;
        }

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        
        fetch('http://localhost:3006/api/customers/', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setUser({
            customer: '',
            name: '',
            lastname: '',
            birthday: '',
            address: '',
            city: '',
            phone: ''
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="customer" className="form-label">Cédula</label>
                <input name="cedula" onChange={handleChange} type="numbers" className="form-control" id="customer" />

                <label htmlFor="name" className="form-label">Nombre</label>
                <input name="nombre" onChange={handleChange} type="text" className="form-control" id="name" />

                <label htmlFor="lastname" className="form-label">Apellido</label>
                <input name="apellido" onChange={handleChange} type="text" className="form-control" id="lastname" />

                <label htmlFor="birthday" className="form-label">Fecha de Nacimiento</label>
                <input name="cumpeaños" onChange={handleChange} ype="text" className="form-control" id="birthday" />

                <label htmlFor="address" className="form-label">Dirección</label>
                <input name="direccion" onChange={handleChange} type="text" className="form-control" id="address" />

                <label htmlFor="city" className="form-label">Ciudad</label>
                <input name="ciudad" onChange={handleChange} type="text" className="form-control" id="city" />
                
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input name="telefono" onChange={handleChange} type="numbers" className="form-control" id="phone" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default UserRegister;