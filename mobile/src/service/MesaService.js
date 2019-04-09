import firebase, { Firebase } from 'react-native-firebase'

class MesaService {

    mesasRef = null;

    constructor() {
        this.mesasRef = firebase.firestore().collection('mesas');
    }

    // Carrega as mesas do banco de dados firebase firestore
    async loadMesas() {
        const mesas = [];
        await this.mesasRef.get().then(
            querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log(doc.id, " => ", doc.data());
                    mesas.push(doc.data());
                })
            })
            .catch(err => {
                console.log('Error getting documents => ', err);
            });
        console.log('Mesas', mesas);
        return mesas;
    }

    saveMesa(mesa) {
        this.mesasRef.add(mesa);
        console.log(mesa);
        return mesa;
    }
}

export default new MesaService();