import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native'

import {
     useState
} from 'react';

import Api from '../services/Api';

import { ICharacter } from '../types';
import { useEffect } from 'react';


function RMCharacter() {
    const [character, setCharacter] = useState<ICharacter[]>();

    useEffect( () => {
        Api.get('character').then(
            res => {
                setCharacter(res.data.results)
            }
        )
    }, [])
    
    return (
        <SafeAreaView
            style={{ backgroundColor: '#7B25F0' }}
        >
            <ScrollView>
                <View
                    style={styles.container}
                >
                    {character?.map(
                        (item, index) => (
                            <View
                                style={styles.card}
                                key={index}
                            >
                                <Image 
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: item.image }}
                                />
                            </View>
                        )
                    )}
                </View>

            </ScrollView>
        </SafeAreaView>
    )   
}

const styles = StyleSheet.create({
    container:
    {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    card:
    {
        flexDirection: 'row',
        backgroundColor: '#7B25F0',
        width: Dimensions.get('window').width - 40,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 12,
        margin: 12
    }
})

export default RMCharacter