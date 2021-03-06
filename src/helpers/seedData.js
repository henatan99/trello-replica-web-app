const cards = {
  tasks: {
    1: {
      title: 'To do',
      data: [
        { idx: 1, message: 'HeplDesk Call BB999', title: 'CP' },
        { idx: 2, message: 'Helpdesk Call AA999', title: 'Fault' },
        { idx: 3, message: 'Helpdesk Call CC999', title: 'CP' },
      ],
    },

    2: {
      title: 'To do',
      data: [
        { idx: 4, message: 'Helpdesk Call TT999', title: 'CP' },
        { idx: 5, message: 'Helpdesk Call ZZ999', title: 'CP' },
        { idx: 6, message: 'Helpdesk Call XX999', title: 'Fault' },
      ],
    },
  },

  lastCard: 2,
  addCard(title) {
    if (title) {
      this.tasks[`${this.lastCard + 1}`] = { title, data: [] };
      this.lastCard += 1;
    }
  },

  lastTask: 6,
  addTask(cardIdx, message) {
    if (cardIdx && message) {
      this.tasks[`${cardIdx}`].data.push({ idx: this.lastTask + 1, message });
      this.lastTask += 1;
    }
  },
};

export default cards;
