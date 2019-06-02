import Page from '../layouts/page'
import {Title, SubTitle, PageText, Emphasis, CenterText } from '../components/page-components'

function Home() {
    return (
        <Page>
            <Title>Vertaalbureau</Title>
            <Title>Jeslee</Title>
            <SubTitle>Laat taal geen obstakel meer zijn !</SubTitle>

            <PageText>
                <Emphasis>
                    <CenterText>Er zijn 67 000 000 bewoners in Frankrijk</CenterText>
                    <CenterText>en alleen 17 000 000 bewoners in Nederland !</CenterText>
                    <CenterText>Technisch gezien zou je je producten 4 x meer in Frankrijk kunnen verkopen.</CenterText>
                    <CenterText>Start met het vertalen van je website en geef een serieus boost aan je omzet!</CenterText>
                </Emphasis>
            </PageText>
        </Page>
    );
}

export default Home;