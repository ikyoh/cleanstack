import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Font } from '@react-pdf/renderer'
import Din from '../../assets/Din/D-DIN.ttf'
import DinBold from '../../assets/Din/D-DIN-Bold.ttf'
import DinCondensed from '../../assets/Din/D-DINCondensed.ttf'
import { AiOutlineDownload } from 'react-icons/ai'
import * as dayjs from 'dayjs'
import { nanoid } from '@reduxjs/toolkit'
import { API_URL } from '../../features/apiConfig'


// Font.register({
//     family: 'Din', fonts: [
//         { src: Din },
//         { src: DinBold, fontWeight: 'bold' },

//     ]
// })
// Font.register({
//     family: 'DinCondensed', fonts: [
//         { src: DinCondensed }
//     ]
// })

const dpi = 72

const gap = 20

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 30
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
    },
    column: {
        flex: 1,
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        marginHorizontal: gap / 2,
    },
    text: {

        fontSize: '10px',
        lineHeight: 1.4
    },
    textBold: {

        fontWeight: 'bold',
        fontSize: '10px',
        lineHeight: 1.4
    },
    mainTitle: {

        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: 'left',
        paddingLeft: gap / 2
    },
    mainSubtitle: {

        fontSize: '12px',
        textAlign: 'left',
        paddingTop: '4px',
        paddingLeft: '8px'

    },
    title: {

        fontWeight: 'bold',
        fontSize: '12px',
        textAlign: 'left'
    },
    signature: {

        fontSize: '9px',
        textAlign: 'left',
    },
    separator: {
        width: '100%',
        height: '2px',
        borderRadius: 20,
        backgroundColor: '#027BBF',
        marginTop: '4px',
        marginBottom: '5px'
    },
    comment: {
        minHeight: 45,
        padding: '2 2',
        marginTop: 10,
        backgroundColor: '#F5F4F4',
        marginHorizontal: gap / 2,
    },
    caresContainer: {
        marginTop: '5px',
        borderTop: '1px solid black',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
    },
    careTitle: {
        padding: '4 10',
        borderBottom: '1px solid black',
        flexDirection: 'row',

        fontWeight: 'bold',
        fontSize: '10px',
    },
    care: {
        padding: '4 10',
        borderBottom: '1px solid black',
        flexDirection: 'row',
        //fontFamily: 'DinCondensed',
        fontSize: '10px',
    },
    pagination: {
        position: 'absolute',
        bottom: 20
    },
    paginationText: {
        width: '100%',

        fontSize: '10px',
        textAlign: 'center',
    },
    userSignature: {
        marginTop: "10px",
        objectFit: "contain",
        maxWidth: "230px",
        maxHeight: "95px",
        width: "auto",
        height: "auto",
    }
});

const Separator = () => {
    return (
        <View style={styles.separator}>
        </View>
    )
}


// Create Document Component
const MyDoc = ({ datas, mission, patient }) => {

    const cares = [
        {
            act: "let. a ch. 1",
            description: " Evaluation des besoins du patient en collaboration avec le m??decin.",
            display: false
        },
        {
            act: "let. a ch. 2",
            description: "Conseils au patient ainsi qu'aux intervenants non professionnels pour les soins, l???administration des m??dicaments ou pour l???utilisation d???appareils m??dicaux, contr??les n??cessaires",
            display: false
        },
        {
            act: "let. a ch. 3",
            description: "Coordination des mesures et dispositions par des infirmi??res et infirmiers sp??cialis??s en lien avec des complications dans les situations de soins complexes et instables.",
            display: false
        },
        {
            act: "let. b ch. 1",
            description: "Contr??le des signes vitaux (tension art??rielle, pouls, temp??rature, respiration, poids)",
            display: false
        },
        {
            act: "let. b ch. 2",
            description: "Soins aux diab??tiques (h??moglucotest, glycosurie, contr??le de l?????tat des pieds, ??ducation th??rapeutique)",
            display: false
        },
        {
            act: "let. b ch. 3",
            description: "Pr??l??vement pour examen de laboratoire.",
            display: false
        },
        {
            act: "let. b ch. 4",
            description: "Mesures th??rapeutiques pour la respiration (administration d???oxyg??ne, inhalations, exercices respiratoires simples, aspiration)",
            display: false
        },
        {
            act: "let. b ch. 5",
            description: "Pose de sondes et de cath??ters, ainsi que les soins qui y sont li??s.",
            display: false
        },
        {
            act: "let. b ch. 6",
            description: "Soins en cas d???h??modialyse ou de dialyse p??riton??ale.",
            display: false
        },
        {
            act: "let. b ch. 7",
            description: "Pr??paration et administration de m??dicaments ainsi que documentation des activit??s qui leur sont associ??es.",
            display: false
        },
        {
            act: "let. b ch. 8",
            description: "Administration ent??rale ou parent??rale de solutions nutritives.",
            display: false
        },
        {
            act: "let. b ch. 9",
            description: "Surveillance de perfusions, de transfusions ou d???appareils servant au contr??le et au maintien des fonctions vitales(.....)",
            display: false
        },
        {
            act: "let. b ch. 10",
            description: "Soins de plaies -rin??age, nettoyage et r??fection de pansement . Soins p??dicures pour les diab??tiques.",
            display: false
        },
        {
            act: "let. b ch. 11",
            description: "Soins en cas de troubles de l?????vacuation urinaire ou intestinale, y compris la r????ducation en cas d???incontinence",
            display: false
        },
        {
            act: "let. b ch. 12",
            description: "Assistance pour des bains m??dicinaux partiels ou complets, application d???enveloppements, cataplasmes et fangos.",
            display: false
        },
        {
            act: "let. b ch. 13",
            description: "Soins destin??s ?? la mise en oeuvre au quotidien de la th??rapie du m??decin, tels que l???exercice de strat??gies permettant de g??rer la maladie et l???instruction pour la gestion des agressions, des angoisses et des id??es parano??aques.",
            display: false
        },
        {
            act: "let. b ch. 14",
            description: "Soutien apport?? aux malades psychiques dans des situations de crise, en particulier pour ??viter les situations aigu??s de mise en danger de soi-m??me ou d???autrui.",
            display: false
        },
        {
            act: "let. c ch. 1",
            description: "Soins de base pour les patients d??pendants (aide ?? la toilette, ?? l???habillage, au d??shabillage, ?? l???alimentation, ?? la mobilisation, pose de bas de contention ....)",
            display: false
        },
        {
            act: "let. c ch. 2",
            description: "Mesures destin??es ?? surveiller et ?? soutenir les malades psychiques pour accomplir les actes ordinaires de la vie (...)",
            display: false
        }
    ]

    const displayedCares = () => {

        let displayed = [...cares]

        datas.content.services.forEach(service => {
            let index = cares.findIndex(obj => obj.act === service.opas)
            displayed[index].display = true
        })

        // console.log('first', datas.content.services)
        // console.log('second', displayed.filter(c => c.display === true))

        return displayed.filter(c => c.display === true)
    }

    const groupedServices = (groupBy) => {
        return datas.content.services.filter(f => f.category === groupBy)
    }



    let patientInfos = ''

    if (patient.gender === 'homme') patientInfos += 'Mr '
    else patientInfos += 'Mme '
    patientInfos += patient.lastname.toUpperCase() + ' ' + patient.firstname
    if (patient.gender === 'homme') patientInfos += ' n?? le '
    else patientInfos += ' n??e le '
    patientInfos += dayjs(patient.birthdate).format('DD MM YYYY') + ' (' + dayjs().diff(patient.birthdate, 'years') + ' ans)'
    patientInfos += "\n"
    patientInfos += (patient.address1) + ', ' + patient.npa + ' ' + patient.city + ', ' + patient.canton
    patientInfos += "\n"
    patientInfos += "N?? AVS : " + patient.avsNumber
    if (patient.assuranceNumber) {
        patientInfos += "\n"
        patientInfos += "N?? Assur?? : " + patient.assuranceNumber
    }


    let assurance = ''
    assurance += mission.assurance.company
    assurance += "\n"
    if (mission.assurance.address1)
        assurance += mission.assurance.address1 + ', '
    if (mission.assurance.npa)
        assurance += mission.assurance.npa + ', '
    if (mission.assurance.city)
        assurance += mission.assurance.city + ', '
    assurance += "\n"
    assurance += 'GLN : ' + mission.assurance.gln
    assurance += "\n"
    assurance += 'Cat??gorie : ' + mission.assurance.type

    let doctor = mission.doctor.fullname + "\n" + '(RCC : ' + mission.doctor.rcc + ')'
    doctor += "\n"
    if (mission.doctor.address1)
        doctor += mission.doctor.address1 + ', '
    if (mission.doctor.npa)
        doctor += mission.doctor.npa + ', '
    if (mission.doctor.city)
        doctor += mission.doctor.city + ', '

    doctor += "\n"
    if (mission.doctor.phone)
        doctor += 'T??l. : ' + mission.doctor.phone

    let nurse = mission.user.lastname.toUpperCase() + ' ' + mission.user.firstname + "\n" + '(RCC : ' + mission.user.rcc + ')'
    nurse += "\n"
    nurse += 'T??l. : ' + mission.user.mobile
    nurse += "\n"
    nurse += 'Email. : ' + mission.user.email


    return (

        <Document >

            <Page size="A4" style={styles.page} dpi={dpi} wrap debug={false}>

                <View style={styles.pagination} fixed>
                    <Text style={styles.paginationText} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} />
                </View >

                <View style={styles.header}>
                    <View>
                        <Text style={styles.mainTitle}>
                            Prescription m??dicale pour soins ?? domicile
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainSubtitle}>
                            (Selon article 7, al.2 OPAS)
                        </Text>
                    </View>
                </View>


                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.title}>
                            {patient.gender === "homme" ? 'Patient' : 'Patiente'}
                        </Text>
                        <Separator />
                        <Text style={styles.text}>
                            {patientInfos}
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.title}>Assurance</Text>
                        <Separator />
                        <Text style={styles.text}>
                            {assurance}
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.title}>Prescription m??dicale</Text>
                        <Separator />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexShrink: 1, flexGrow: 1, flexBasis: 0 }}>
                                <Text style={{ ...styles.text, fontWeight: 'bold' }}>
                                    {datas.content.type}
                                    {"\n"}
                                    P??riode : {dayjs(datas.content.beginAt).format('L')} au {dayjs(datas.content.endAt).format('L') + ' '}
                                    ({dayjs(datas.content.endAt).diff(datas.content.beginAt, 'days')} jours)
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexShrink: 1, flexGrow: 1, flexBasis: 0 }}>
                                <Text style={{ ...styles.text, fontWeight: 'bold' }}>
                                    Cas : {datas.content.case}
                                    {"\n"}
                                    {datas.content.disability === "oui" && "Au b??nifice d???une allocation pour impotent"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {datas.content.diagnosticNurse.length > 0 &&
                    <View style={styles.comment}>
                        <Text style={{ ...styles.text, whiteSpace: 'pre-line' }}>
                            {datas.content.diagnosticNurse}
                        </Text>
                    </View>
                }

                <View style={styles.comment}>
                    <Text style={styles.text}>
                        (?? remplir par le m??decin pour des mesures m??dico-d??l??gu??es uniquement)
                        {"\n"}
                        {datas.content.diagnosticDoctor}
                    </Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Text style={styles.title}>
                                Soins infirmiers
                            </Text>
                            <Text style={{ fontSize: '10px' }}>

                            </Text>
                        </View>
                        <Separator />
                        <View style={styles.caresContainer}>
                            {displayedCares().map((displayedCare) =>
                                <View style={styles.care} key={nanoid()}>
                                    <Text style={{ width: 80 }}>
                                        {displayedCare.act}
                                    </Text>
                                    <Text style={{ width: "100%" }}>
                                        {displayedCare.description}
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5px' }}>
                    <View style={{ marginHorizontal: gap / 2 }} >
                        <Text style={styles.text}>
                            Total A (??valuation et conseils)  : {datas.content.totalA} min.
                            {datas.content.totalA !== 0 && " (" + Math.round(datas.content.totalA * 100 / 60) / 100 + "h)"}
                            {"\n"}
                            Total B (Examens et traitements) : {datas.content.totalB} min.
                            {datas.content.totalB !== 0 && " (" + Math.round(datas.content.totalB * 100 / 60) / 100 + "h)"}
                            {"\n"}
                            Total C (Soins de base) : {datas.content.totalC} min.
                            {datas.content.totalC !== 0 && " (" + Math.round(datas.content.totalC * 100 / 60) / 100 + "h)"}
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: gap / 2 }} >
                        <Text style={styles.textBold}>
                            Total : {datas.content.totalA + datas.content.totalB + datas.content.totalC} min. ({Math.round((datas.content.totalA + datas.content.totalB + datas.content.totalC) * 100 / 60) / 100} h)
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.title}>M??decin</Text>
                        <Separator />
                        <Text style={styles.text}>
                            {doctor}
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.title}>Infirmier</Text>
                        <Separator />
                        <Text style={styles.text}>
                            {nurse}
                        </Text>
                    </View>

                    {mission.coworkersDetailed.length > 0 &&
                        <View style={styles.column}>
                            <Text style={styles.title}>Autres prestataires </Text>
                            <Separator />
                            {mission.coworkersDetailed.map(p =>
                                <Text style={styles.text} key={nanoid()}>
                                    {p.lastname.toUpperCase()} {p.firstname} {"\n"} (RCC: {p.rcc})
                                </Text>
                            )}
                        </View>
                    }
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.signature}>Date et signature du m??decin</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.signature}>Signature de l'infirmier</Text>
                        {mission.user.signature &&
                            <Image
                                style={styles.userSignature}
                                source={API_URL + mission.user.signature.contentUrl}
                            />
                        }
                    </View>
                    {mission.coworkersDetailed.length > 0 &&
                        <View style={styles.column}>
                        </View>
                    }
                </View>



            </Page >

            <Page size="A4" style={styles.page} dpi={dpi} wrap debug={false}>

                <View style={styles.header}>
                    <View>
                        <Text style={styles.mainTitle}>
                            Liste d??taill??es des prestations
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainSubtitle}>
                            (Selon article 7, al.2 OPAS)
                        </Text>
                    </View>
                </View>


                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.title}>
                            {patient.gender === "homme" ? 'Patient' : 'Patiente'}
                        </Text>
                        <Separator />
                        <Text style={styles.text}>
                            {patientInfos}
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.title}>Assurance</Text>
                        <Separator />
                        <Text style={styles.text}>
                            {assurance}
                        </Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Text style={styles.title}>
                                Soins infirmiers
                            </Text>
                            <Text style={{ fontSize: '10px' }}>
                                Description d??taill??e de la prestation (selon article 7, al. 2 OPAS)
                            </Text>
                        </View>
                        <Separator />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexShrink: 1, flexGrow: 1, flexBasis: 0 }}>
                                <Text style={{ ...styles.text, fontWeight: 'bold' }}>
                                    {datas.content.type}
                                    {"\n"}
                                    P??riode : {dayjs(datas.content.beginAt).format('L')} au {dayjs(datas.content.endAt).format('L') + ' '}
                                    ({dayjs(datas.content.endAt).diff(datas.content.beginAt, 'days')} jours)
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexShrink: 1, flexGrow: 1, flexBasis: 0 }}>
                                <Text style={{ ...styles.text, fontWeight: 'bold' }}>
                                    Cas : {datas.content.case}
                                    {"\n"}
                                    {datas.content.disability === "oui" && "Au b??nifice d???une allocation pour impotent"}
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: '10px' }}>
                            <View style={{
                                padding: '0 10',
                                flexDirection: 'row',
                                //fontFamily: 'DinCondensed',
                                fontSize: '9px',
                            }}>
                                <Text style={{ width: 120 }}>
                                    OPAS
                                </Text>
                                <Text style={{ width: 80 }}>
                                    Code *
                                </Text>
                                <Text style={{ width: '100%', paddingRight: 15 }}>
                                    Prestation
                                </Text>
                                <Text style={{ width: 140 }}>
                                    Fr??quence
                                </Text>
                            </View>
                        </View>

                        {groupedServices("A").length > 0 &&
                            <View style={styles.caresContainer}>
                                <View>
                                    <Text style={styles.careTitle}>
                                        A / Evaluation, Conseil
                                    </Text>
                                </View>
                                {groupedServices("A").map((s) =>
                                    <View style={styles.care} key={nanoid()}>
                                        <Text style={{ width: 120 }}>
                                            {s.opas}
                                        </Text>
                                        <Text style={{ width: 80 }}>
                                            {s.act}
                                        </Text>
                                        <Text style={{ width: '100%', paddingRight: 15 }}>
                                            {s.title}
                                        </Text>
                                        <Text style={{ width: 140 }}>
                                            {s.frequency} fois {s.periodicity}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        }
                        {groupedServices("B").length > 0 &&
                            <View style={styles.caresContainer}>
                                <View>
                                    <Text style={styles.careTitle}>
                                        B / Examens et traitements
                                    </Text>
                                </View>
                                {groupedServices("B").map((s) =>
                                    <View style={styles.care} key={nanoid()}>
                                        <Text style={{ width: 120 }}>
                                            {s.opas}
                                        </Text>
                                        <Text style={{ width: 80 }}>
                                            {s.act}
                                        </Text>
                                        <Text style={{ width: '100%', paddingRight: 15 }}>
                                            {s.title}
                                        </Text>
                                        <Text style={{ width: 140 }}>
                                            {s.frequency} fois {s.periodicity}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        }
                        {groupedServices("C").length > 0 &&
                            <View style={styles.caresContainer}>
                                <View>
                                    <Text style={styles.careTitle}>
                                        C / Soins de base
                                    </Text>
                                </View>
                                {groupedServices("C").map((s) =>
                                    <View style={styles.care} key={nanoid()}>
                                        <Text style={{ width: 120 }}>
                                            {s.opas}
                                        </Text>
                                        <Text style={{ width: 80 }}>
                                            {s.act}
                                        </Text>
                                        <Text style={{ width: '100%', paddingRight: 15 }}>
                                            {s.title}
                                        </Text>
                                        <Text style={{ width: 140 }}>
                                            {s.frequency} fois {s.periodicity}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        }
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5px' }}>
                    <View style={{ marginHorizontal: gap / 2 }} >
                        <Text style={styles.text}>
                            Total A (??valuation et conseils)  : {datas.content.totalA} min.
                            {datas.content.totalA !== 0 && " (" + Math.round(datas.content.totalA * 100 / 60) / 100 + "h)"}
                            {"\n"}
                            Total B (Examens et traitements) : {datas.content.totalB} min.
                            {datas.content.totalB !== 0 && " (" + Math.round(datas.content.totalB * 100 / 60) / 100 + "h)"}
                            {"\n"}
                            Total C (Soins de base) : {datas.content.totalC} min.
                            {datas.content.totalC !== 0 && " (" + Math.round(datas.content.totalC * 100 / 60) / 100 + "h)"}
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: gap / 2 }} >
                        <Text style={styles.textBold}>
                            Total : {datas.content.totalA + datas.content.totalB + datas.content.totalC} min. ({Math.round((datas.content.totalA + datas.content.totalB + datas.content.totalC) * 100 / 60) / 100} h)
                        </Text>
                    </View>
                </View>


                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={{ fontSize: '8px', lineHeight: 1.4 }}>
                            Code* : Selon le catalogue des actes de l'ASSASD (novembre 2015)
                        </Text>
                    </View>
                </View>


                <View style={styles.pagination} fixed>
                    <Text style={styles.paginationText} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} />
                </View>

            </Page>

        </Document >
    )

}

const OpasPrint = ({ datas, mission, patient, }) => {

    // console.log('datas', datas)
    // console.log('mission', mission)
    // console.log('patient', patient)
    // console.log('mission.user.signature.contentUrl', mission.user.signature.contentUrl)

    const fileName = "Opas_" + patient.lastname.toUpperCase() + '_' + patient.firstname.toUpperCase() + '_' + dayjs().format('DD-MM-YYYY')

    if (datas && mission)
        return (
            <div>
                <PDFDownloadLink document={<MyDoc datas={datas} mission={mission} patient={patient} />} fileName={fileName}>
                    {({ blob, url, loading, error }) =>
                        loading ? <AiOutlineDownload size={30} color={'white'} /> : <AiOutlineDownload size={30} />
                    }
                </PDFDownloadLink>
            </div>
        )
    else return null
}

export default OpasPrint