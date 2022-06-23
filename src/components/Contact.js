// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import '../components/Contact.css';
import React from 'react';

const Contact = (props) => {
    return (
        <section>
            { props.contact.map((cont)=> {
                return(
                    <div className="card" key={cont.email}>                        
                        <div className="img">
                            <img src={cont.photo} alt="" />
                        </div>
                        <div className="detail">
                            <div className='fw-bold'>{cont.name}</div>
                            <div>{cont.phone}</div>
                            <div>{cont.email}</div>
                        </div>                        
                    </div>
                )
            })}            
        </section>
    )
}

export default Contact;