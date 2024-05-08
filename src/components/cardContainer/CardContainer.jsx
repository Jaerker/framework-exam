import Card from '../card/Card';
import './card-container.css'
const CardContainer = ({ list }) => {
    return (
        <section className='card-container'>
            {list ?
                <>
                    {list.length === 0 ?
                        <>
                            <h2 className='container-message'>Här var det visst tomt!</h2>
                            <p className='container-submessage'>Testa att söka efter något annat så kan det dyka upp ny information </p>
                        </>
                        : <>
                            {list.map((data) => {
                                return (
                                    <Card key={data.id} data={data} />
                                )
                            })}
                        </>}
                </>
                :
                <>
                    <h2 className='container-message'>Vänta...</h2>

                </>}


        </section>
    );
}

export default CardContainer;