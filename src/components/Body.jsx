import Card from "./Card";

const Body = ({ guitarras }) => {
    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
                {guitarras.map((guitarra) => (
                    <Card key={guitarra.id} guitarra={guitarra} />
                ))}
            </div>
        </main>
    );
};

export default Body;