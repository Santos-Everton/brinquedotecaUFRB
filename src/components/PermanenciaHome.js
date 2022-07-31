import {useState, useEffect} from 'react';
import PermanenciaForm from './PermanenciaForm';
import PermanenciaLista from './PermanenciaLista';


function Home() {
    const[index, setIndex] = useState(0);
    const[permanencias, setPermanencias] = useState([]);
    const[permanencia, setPermanencia] = useState({id: 0});

    useEffect(() => {
        permanencias.length <= 0 ? setIndex(1) : 
            setIndex(Math.max.apply(Math, permanencias.map(item => item.id)) + 1);
    }, [permanencias])

    function addPermanencia(perm) {
        setPermanencias([...permanencias, {...perm, id: index}]);
    }

    function fecharPermanencia(id){
        const permanenciasFiltradas = permanencias.filter(permanencia => permanencia.id !== id);
        setPermanencias([...permanenciasFiltradas]);
    }

    function editarPermanencia(id){
        const permanencia = permanencias.filter((permanencia) => permanencia.id === id);
        setPermanencia(permanencia[0]);
    }
    
    function atualizarPermanencia(perm){
        setPermanencias(permanencias.map(item => item.id === perm.id ? perm : item));
        setPermanencia({id: 0});
    }

    function cancelarPermaencia(){
        setPermanencia({id: 0});
    }

    return (
        <>
            <PermanenciaForm 
                addPermanencia={addPermanencia} 
                cancelarPermaencia={cancelarPermaencia}
                atualizarPermanencia={atualizarPermanencia}
                permanencias={permanencias} 
                permanenciaSelecionada={permanencia}
            />
            
            <hr />
            
            <PermanenciaLista 
                permanencias={permanencias} 
                fecharPermanencia={fecharPermanencia} 
                editarPermanencia={editarPermanencia}
            />
        </>
    );
}
export default Home;


