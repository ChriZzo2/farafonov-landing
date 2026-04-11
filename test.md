test('Фильтр даты вкладка черновики', async () => {
  render(<LetterDateFilter tab='DRAFT' />, {
    wrapper: storeRef.wrapper!,
  });
  expect(getLetters().filter.dateFrom).toBe(undefined);
  expect(getLetters().filter.dateTo).toBe(undefined);

  // Устанавливаем даты напрямую через store — кнопка "Сегодня" в domrf-ui падает
  // когда filterValue.dateFrom пустой (баг библиотеки DateSearch.tsx:293)
  storeRef.store!.dispatch(updateLettersFilter({
    dateFrom: new Date('2026-01-01T00:00:00.000Z').toISOString(),
    dateTo: new Date('2026-01-01T23:59:59.999Z').toISOString(),
  }));

  expect(getLetters().filter.dateFrom).not.toBe(undefined);
  expect(getLetters().filter.dateTo).not.toBe(undefined);

  fireEvent.click(await screen.findByText('Дата создания'));
  const resetBtn = await screen.findByRole('button', {
    name: /Сбросить/i,
  });
  fireEvent.click(resetBtn);
  expect(getLetters().filter.dateFrom).toBe(undefined);
  expect(getLetters().filter.dateTo).toBe(undefined);
});
