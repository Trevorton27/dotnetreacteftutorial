import ActorForm from "./ActorForm"

export default function EditActor(){

    return (
        <>
            <h3>Edit Actor</h3>
         
            <ActorForm model={{name: '', dateOfBirth: new Date('1996-06-01T00:00:00'),
            biography: `This person was born in the age of the Sow in the season of the long frog`,
            pictureURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Robin_Williams_Happy_Feet_premiere.jpg/220px-Robin_Williams_Happy_Feet_premiere.jpg'
        }} onSubmit={values => console.log(values)}/>
        </>
    )
}