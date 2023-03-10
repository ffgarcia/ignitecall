/* eslint-disable prettier/prettier */
import { Checkbox, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { IntervalBox, IntervalContainer, IntervalDay, IntervalInputs, IntervalItem } from "./styles"

export default function TimeIntervals() {

    return (
        <Container>
            <Header>
                <Heading as="strong">Quase lá</Heading>
                <Text>
                    Defina o intervalo de horários que você está disponível em cada dia da semana.
                </Text>
                <MultiStep size={4} currentStep={3} />
            </Header>

            <IntervalBox>
                <IntervalContainer>
                    <IntervalItem>
                        <IntervalDay>
                            <Checkbox />
                            <Text>Segunda-feira</Text>
                        </IntervalDay>
                        <IntervalInputs>
                            <TextInput size="sm" type="time" step={60} />
                            <TextInput size="sm" type="time" step={60} />
                        </IntervalInputs>
                    </IntervalItem>
                </IntervalContainer>
            </IntervalBox>
        </Container>
    )
}
