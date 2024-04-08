import firestore from '@react-native-firebase/firestore';

export const textIndexToArray = (str: string) => {
  const string = str.trim().replace(/ +(?= )/g, '');

  const wordsArray = string.split(/\s+/);

  const arr: string[] = [];
  wordsArray.forEach(word => {
    for (let i = 0; i < word.trim().length; i++) {
      arr.push(word.substr(0, i + 1).toLowerCase());
    }
  });
  return arr;
};

export const seedFirestore = async () => {
  try {
    const websites = [
      {
        description:
          "Netflix to release new documentary series 'Crime Scene: The Times Square Killer'",
        image: 'https://www.gstatic.com/webp/gallery/1.jpg',
        lowercaseTitle: 'netflix.com: crime scene',
        name: 'Crime Scene: The Times Square Killer',
        tags: ['documentary', 'true crime'],
        title: 'Crime Scene: The Times Square Killer',
        url: 'https://www.netflix.com/title/81218223',
      },
      {
        description:
          "Netflix announces renewal of 'Bridgerton' for seasons 3 and 4",
        image: 'https://www.gstatic.com/webp/gallery/2.jpg',
        lowercaseTitle: 'netflix.com: bridgerton',
        name: 'Bridgerton',
        tags: ['series', 'period drama'],
        title: 'Bridgerton',
        url: 'https://www.netflix.com/title/80232398',
      },
      {
        description:
          "New trailer released for Netflix's 'Stranger Things 4', revealing premiere date",
        image: 'https://www.gstatic.com/webp/gallery/3.jpg',
        lowercaseTitle: 'netflix.com: stranger things',
        name: 'Stranger Things 4',
        tags: ['series', 'sci-fi', 'horror'],
        title: 'Stranger Things 4',
        url: 'https://www.netflix.com/title/80057281',
      },
      {
        description:
          'Netflix announces collaboration with renowned director David Fincher for new psychological thriller series',
        image: 'https://www.gstatic.com/webp/gallery/4.jpg',
        lowercaseTitle: 'netflix.com: david fincher',
        name: 'Untitled David Fincher Project',
        tags: ['series', 'psychological thriller'],
        title: 'Untitled David Fincher Project',
        url: 'https://www.netflix.com',
      },
      {
        description:
          "Netflix's 'Squid Game' becomes the platform's most-watched series, surpassing 111 million views",
        image: 'https://www.gstatic.com/webp/gallery/5.jpg',
        lowercaseTitle: 'netflix.com: squid game',
        name: 'Squid Game',
        tags: ['series', 'drama', 'thriller'],
        title: 'Squid Game',
        url: 'https://www.netflix.com/title/81040344',
      },
      {
        description:
          'New Netflix documentary sheds light on the life and legacy of music icon Prince',
        image: 'https://www.gstatic.com/webp/gallery/6.jpg',
        lowercaseTitle: 'netflix.com: prince',
        name: 'Prince: Music, Legacy, and Influence',
        tags: ['documentary', 'music'],
        title: 'Prince: Music, Legacy, and Influence',
        url: 'https://www.netflix.com/title/81232109',
      },
    ];

    for (const website of websites) {
      await firestore()
        .collection('results')
        .add({
          ...website,
          searchableDescription: textIndexToArray(website.description),
        });
    }
    console.log('Firestore database seeded successfully!');
  } catch (error) {
    console.error('Error seeding Firestore database:', error);
  }
};

// seedFirestore();
