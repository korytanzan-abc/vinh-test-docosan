import React from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import moment from 'moment';
import { Header, Footer, SectionHeader, ItemSection } from '@components/ui';
import data from './data.json';
import { AppoitmentType, CalendarType } from '@const'

const App = () => {
  let appoitment: AppoitmentType[] = [];
  let arrTitle: string[] = [];
  let calendar: CalendarType[] = [
    {
      title: '0',
      data: []
    },
    {
      title: '1',
      data: []
    },
    {
      title: '2',
      data: []
    },
    {
      title: '3',
      data: []
    },
    {
      title: '4',
      data: []
    },
    {
      title: '5',
      data: []
    },
    {
      title: '6',
      data: []
    },
    {
      title: '7',
      data: []
    },
    {
      title: '8',
      data: []
    },
    {
      title: '9',
      data: []
    },
    {
      title: '10',
      data: []
    },
    {
      title: '11',
      data: []
    },
    {
      title: '12',
      data: []
    },
    {
      title: '13',
      data: []
    },
    {
      title: '14',
      data: []
    },
    {
      title: '15',
      data: []
    },
    {
      title: '16',
      data: []
    },
    {
      title: '17',
      data: []
    },
    {
      title: '18',
      data: []
    },
    {
      title: '19',
      data: []
    },
    {
      title: '20',
      data: []
    },
    {
      title: '21',
      data: []
    },
    {
      title: '22',
      data: []
    },
    {
      title: '23',
      data: []
    }
  ];

  data.data.map(
    item => (appoitment = [...appoitment, ...item.appoitment_calendar])
  );
  appoitment.forEach(e => {
    const time = Number(moment(e.start_time).format('H'));
    if (time && calendar[time]) {
      calendar[time].data.push(e);
    }
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={`Lịch khám ngày ${moment().format('DD/MM/YYYY')}`} />
      <SectionList
        sections={calendar}
        keyExtractor={(index, item) => index + item.toString()}
        renderItem={({ section }) => {
          if (arrTitle.indexOf(section.title) == -1) {
            arrTitle.push(section.title);
            return <ItemSection section={section} />;
          }
          return null;
        }}
        renderSectionHeader={({ section: { title, data } }) => (
          <SectionHeader title={title} data={data} />
        )}
        ListFooterComponent={<Footer />}
      />
    </SafeAreaView>
  );
};

export default App;
