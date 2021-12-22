import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Container, Button,LeftArrow, Text} from './styles';
import { useHistory } from 'react-router-dom';

export const NavigationBack: React.FC = () => {
    const history = useHistory();
    function navigateBack() {
        history.goBack();
    }
    return (
        <Container>
           <Button onClick={navigateBack}>
             <LeftArrow ></LeftArrow>
           </Button>
            <Text>WMDC</Text>
        </Container>
    );
}