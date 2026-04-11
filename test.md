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
  console.log('[DEBUG] todayBtn:', todayBtn?.tagName, todayBtn?.textContent);
  if (!todayBtn) throw new Error('Кнопка Сегодня не найдена — см логи выше');

  try {
    fireEvent.click(todayBtn);
    console.log('[DEBUG] after click Сегодня — OK');
    console.log('[DEBUG] filter after Сегодня:', storeRef.store?.getState()?.letters?.filter);
  } catch (e) {
    console.log('[DEBUG] CRASH during click Сегодня:', e);
    throw e;
  }

  const applyBtn = screen.queryByText('Применить') as HTMLButtonElement | null;
  console.log('[DEBUG] applyBtn after Сегодня:', applyBtn, 'disabled:', applyBtn?.disabled);
  expect(applyBtn?.disabled).toBe(false);

  console.log('[DEBUG] clicking Применить...');
  await act(async () => {
    fireEvent.click(screen.getByText('Применить'));
    await new Promise((r) => setTimeout(r, 50));
  });
  console.log('[DEBUG] after Применить, filter:', storeRef.store?.getState()?.letters?.filter);

  console.log('[DEBUG] finding Дата создания again...');
  fireEvent.click(await screen.findByText('Дата создания'));
  console.log('[DEBUG] clicked Дата создания, finding Сбросить...');
  const resetBtn = await screen.findByRole('button', {
    name: /Сбросить/i,
  });
  console.log('[DEBUG] found Сбросить, clicking...');
  try {
    fireEvent.click(resetBtn);
    console.log('[DEBUG] after Сбросить, filter:', storeRef.store?.getState()?.letters?.filter);
  } catch (e) {
    console.log('[DEBUG] CRASH during Сбросить:', e);
    throw e;
  }
  console.log('[DEBUG] checking final state...');
  console.log('[DEBUG] getLetters():', getLetters());
  console.log('[DEBUG] getLetters().filter:', getLetters()?.filter);
  expect(getLetters().filter.dateFrom).toBe(undefined);
  expect(getLetters().filter.dateTo).toBe(undefined);
});
