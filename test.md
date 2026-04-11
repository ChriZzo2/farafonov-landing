test('Фильтр даты вкладка черновики', async () => {
  render(<LetterDateFilter tab='DRAFT' />, {
    wrapper: storeRef.wrapper!,
  });
  console.log('[DEBUG] storeRef.store:', storeRef.store);
  console.log('[DEBUG] getState():', storeRef.store?.getState());
  console.log('[DEBUG] letters:', storeRef.store?.getState()?.letters);
  console.log('[DEBUG] filter:', storeRef.store?.getState()?.letters?.filter);
  expect(getLetters().filter.dateFrom).toBe(undefined);
  expect(getLetters().filter.dateTo).toBe(undefined);
  fireEvent.click(await screen.findByText('Дата создания'));
  console.log('[DEBUG] after click Дата создания, DOM:', document.body.innerHTML.slice(0, 500));
  screen.getByText('Применить') as HTMLButtonElement;

  const todayBtn = await screen.findByRole('button', { name: /Сегодня/i }).catch((e) => {
    console.log('[DEBUG] Сегодня button NOT FOUND:', e.message);
    console.log('[DEBUG] DOM at timeout:', document.body.innerHTML);
    return null;
  });
  console.log('[DEBUG] todayBtn:', todayBtn);
  if (!todayBtn) throw new Error('Кнопка Сегодня не найдена — см логи выше');
  fireEvent.click(todayBtn);

  expect((screen.getByText('Применить') as HTMLButtonElement).disabled).toBe(
    false,
  );

  await act(async () => {
    fireEvent.click(screen.getByText('Применить'));
    await new Promise((r) => setTimeout(r, 50));
  });
 
  fireEvent.click(await screen.findByText('Дата создания'));
  const resetBtn = await screen.findByRole('button', {
    name: /Сбросить/i,
  })
  fireEvent.click(resetBtn);
  expect(getLetters().filter.dateFrom).toBe(undefined);
  expect(getLetters().filter.dateTo).toBe(undefined);
});
