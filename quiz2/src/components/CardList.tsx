type CardItem = {
  id: number
  title: string
  image: string
  description: string
}

const cards: CardItem[] = [
  {
    id: 1,
    title: 'მთის თავგადასავლები',
    image: 'https://picsum.photos/seed/mountain/300/200',
    description:
      'აღმოაჩინეთ თვალწარმტაცი სალაშქრო ბილიკები და დაიპყარით მაღალი მწვერვალები გამოცდილ გიდებთან ერთად.',
  },
  {
    id: 2,
    title: 'ზღვისპირა დასვენება',
    image: 'https://picsum.photos/seed/ocean/300/200',
    description:
      'დაისვენეთ სუფთა პლაჟებზე, დატკბით კრისტალურად ანკარა წყლით და გაიცანით ფერადი წყალქვეშა სამყარო.',
  },
  {
    id: 3,
    title: 'ქალაქური მოგზაურობა',
    image: 'https://picsum.photos/seed/city/300/200',
    description:
      'იგრძენით მსოფლიოს ცნობილი ქალაქების ენერგია — კულტურა, კერძები და დაუვიწყარი ღამის ცხოვრება.',
  },
  {
    id: 4,
    title: 'ტყის თავშესაფარი',
    image: 'https://picsum.photos/seed/forest/300/200',
    description:
      'დაუბრუნდით ბუნებას მშვიდ ტყის კოტეჯებში, მაღალი ხეებითა და სუფთა ჰაერით გარშემორტყმული.',
  },
  {
    id: 5,
    title: 'უდაბნოს ექსპედიცია',
    image: 'https://picsum.photos/seed/desert/300/200',
    description:
      'დაიწყეთ თავგადასავალი უდაბნოს საფარში და იხილეთ ოქროსფერი ქვიშის ბორცვები ვარსკვლავიან ცის ქვეშ.',
  },
]

function CardList() {
  return (
    <section className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h3>{card.title}</h3>
          <img src={card.image} alt={card.title} />
          <p>{card.description}</p>
        </div>
      ))}
    </section>
  )
}

export default CardList
