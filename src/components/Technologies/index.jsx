import { Grid, Row, Spacer, Text } from "@nextui-org/react"
import { SiAngular, SiCypress, SiJest, SiNestjs, SiReact, SiSvelte, SiVuedotjs, SiIonic, SiTestinglibrary, SiVite, SiRollupdotjs, SiWebpack } from 'react-icons/si'
import styles from './index.module.css'
import TechnologyItem from "./TechnologyItem"


const Technologies = () => (
    <>
        <Spacer id="technologies"/>
        <Spacer y={4} />
        <Text h2 align="center" color="white">
            Technologies
        </Text>
        <Spacer y={2} />
        <Row justify="center">
            <Grid sm={12} md={8} direction="column">
                <Text color="white" size="1.1rem">
                    In summary, I leave you some of the technologies or tools with which I have worked.
                </Text>
            </Grid>
        </Row>
        <Spacer y={1} />
        <Grid.Container sm={12} md={8} justify="center" align="center" wrap="wrap" className={styles.skillsContainer}>
            <Grid sm={12} direction="column" className={styles.skills}>
                <Text h3 color="white">
                    Frameworks/librerías
                </Text>
                <Grid.Container gap={2} wrap="wrap" justify="center">
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiAngular size="4rem" color="#dd0031" />}
                            name="Angular"
                        />
                    </Grid>
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiIonic size="4rem" color="#3880ff" />}
                            name="Ionic"
                        />
                    </Grid>
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiReact size="4rem" color="#60dafc" />}
                            name="React"
                        />
                    </Grid>
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiVuedotjs size="4rem" color="#41b883" />}
                            name="Vue"
                        />
                    </Grid>
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiNestjs size="4rem" color="#e0234e" />}
                            name="NestJS"
                        />
                    </Grid>
                </Grid.Container>
            </Grid>
            <Grid sm={12} direction="column" className={styles.skills}>
                <Text h3 color="white">
                    Testing
                </Text>
                <Grid.Container gap={2} wrap="wrap" justify="center">
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiJest size="4rem" color="#99424f"/>}
                            name="Jest"
                        />
                    </Grid>
                </Grid.Container>
            </Grid>
            <Grid sm={12} direction="column" className={styles.skills}>
                <Text h3 color="white">
                    Empaquetadores Webs
                </Text>
                <Grid.Container gap={2} wrap="wrap" justify="center">
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiWebpack size="4rem" color="#84c6e8"/>}
                            name="Webpack"
                        />
                    </Grid>
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiRollupdotjs size="4rem" color="#e73334"/>}
                            name="Rollup"
                        />
                    </Grid>
                    <Grid className={styles.skill}>
                        <TechnologyItem 
                            icon={<SiVite size="4rem" color="#ffc71f" />}
                            name="Vite"
                        />
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
        <Spacer y={4} />
    </>
)

export default Technologies