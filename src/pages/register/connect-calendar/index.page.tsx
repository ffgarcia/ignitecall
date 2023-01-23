/* eslint-disable prettier/prettier */
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { ArrowRight, Check } from "phosphor-react"
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from "./styles"


export default function ConnectCalendar() {
    const session = useSession();
    const router = useRouter();

    const hasAuthError = !!router.query.error;
    const hasAuth = session?.status === 'authenticated';

    async function handleConnectCalendar() {
        await signIn('google');
    }

    return (
        <Container>
            <Header>
                <Heading as="strong">Conecte sua agenda!</Heading>
                <Text>
                    Conecte o seu calendário para verificar automaticamente as horas
                    ocupadas e os novos eventos à medida em que são agendados.
                </Text>
                <MultiStep size={4} currentStep={2} />
            </Header>
            <ConnectBox>
                <ConnectItem>
                    <Text>Google Calendar</Text>
                    {!hasAuth &&
                        <Button variant="secondary" size="sm" onClick={handleConnectCalendar}>
                            Conectar <ArrowRight />
                        </Button>
                    }
                    {hasAuth &&
                        <Button variant="primary" size="sm" disabled={true}>
                            Conectado <Check />
                        </Button>
                    }
                </ConnectItem>

                {hasAuthError &&
                    <AuthError size="xs">
                        Para continuar você deve habilitar as permissões de acesso ao Google Calendar.
                    </AuthError>
                }

                <Button type="submit" disabled={!hasAuth} >
                    Próximo passo <ArrowRight />
                </Button>
            </ConnectBox>
        </Container>
    )
}
