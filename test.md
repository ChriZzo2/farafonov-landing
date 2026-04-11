npx jest
 PASS  src/components/LetterDocumentTemplate/StackFiles.test.ts
 PASS  stories/Modals/LetterHistoryModal.test.tsx (6.464 s)
 PASS  stories/LetterPreview/LetterPreview.test.tsx (6.601 s)
 PASS  stories/Modals/NeedActionModal.test.tsx (7.146 s)
  ● Console

    console.warn
      ⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` futur
e flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.

      34 | test('Тест компонента <NeedActionModal> ничего не делать ', async () => {
      35 |   const onClose = jest.fn();
    > 36 |   render(<NeedActionModal onClose={onClose} selectedLetterId={'0000'} />, {
         |         ^
      37 |     wrapper: storeRef.wrapper!,
      38 |   });
      39 |   fireEvent.click(screen.getByText(btnCancelText));

      at warn (node_modules/react-router/lib/deprecations.ts:9:13)
      at warnOnce (node_modules/react-router/lib/deprecations.ts:14:3)
      at Object.logDeprecation [as UNSAFE_logV6DeprecationWarnings] (node_modules/react-router/lib/deprecations.ts:26:5)
      at logV6DeprecationWarnings (node_modules/react-router-dom/index.tsx:721:11)
      at invokePassiveEffectCreate (node_modules/react-dom/cjs/react-dom.development.js:23487:20)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:3945:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:3994:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4056:31)
      at flushPassiveEffectsImpl (node_modules/react-dom/cjs/react-dom.development.js:23574:9)
      at unstable_runWithPriority (node_modules/scheduler/cjs/scheduler.development.js:468:12)
      at runWithPriority$1 (node_modules/react-dom/cjs/react-dom.development.js:11276:10)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom.development.js:23447:14)
      at Object.<anonymous>.flushWork (node_modules/react-dom/cjs/react-dom-test-utils.development.js:992:10)
      at act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:1107:9)
      at render (node_modules/@testing-library/react/dist/pure.js:97:26)
      at Object.<anonymous> (stories/Modals/NeedActionModal.test.tsx:36:9)

 FAIL  stories/Letters/LettersFilters.test.tsx (9.635 s)
  ● Console

    console.warn
      ⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` futur
e flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.

      52 | // #region LetterNumberFilter
      53 | test('Фильтр номера в банк', async () => {
    > 54 |   render(<LetterNumberFilter />, {
         |         ^
      55 |     wrapper: storeRef.wrapper!,
      56 |   });
      57 |

      at warn (node_modules/react-router/lib/deprecations.ts:9:13)
      at warnOnce (node_modules/react-router/lib/deprecations.ts:14:3)
      at Object.logDeprecation [as UNSAFE_logV6DeprecationWarnings] (node_modules/react-router/lib/deprecations.ts:26:5)
      at logV6DeprecationWarnings (node_modules/react-router-dom/index.tsx:721:11)
      at invokePassiveEffectCreate (node_modules/react-dom/cjs/react-dom.development.js:23487:20)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:3945:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:3994:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4056:31)
      at flushPassiveEffectsImpl (node_modules/react-dom/cjs/react-dom.development.js:23574:9)
      at unstable_runWithPriority (node_modules/scheduler/cjs/scheduler.development.js:468:12)
      at runWithPriority$1 (node_modules/react-dom/cjs/react-dom.development.js:11276:10)
      at flushPassiveEffects (node_modules/react-dom/cjs/react-dom.development.js:23447:14)
      at Object.<anonymous>.flushWork (node_modules/react-dom/cjs/react-dom-test-utils.development.js:992:10)
      at act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:1107:9)
      at render (node_modules/@testing-library/react/dist/pure.js:97:26)
      at Object.<anonymous> (stories/Letters/LettersFilters.test.tsx:54:9)

    console.log
      [DEBUG] storeRef.store: {
        dispatch: [Function (anonymous)],
        subscribe: [Function: subscribe],
        getState: [Function: getState],
        replaceReducer: [Function: replaceReducer],
        '@@observable': [Function: observable]
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:131:11)

    console.log
      [DEBUG] getState(): {
        letters: {
          baseUrl: '',
          selectedIds: [],
          filter: {
            legalEntityIds: undefined,
            letterNumber: undefined,
            typeIds: undefined,
            dateFrom: undefined,
            dateTo: undefined,
            contextSearch: undefined,
            isNotRead: undefined,
            sortDescending: true,
            statuses: undefined,
            territorialDivisionIds: undefined,
            functionalDivisionIds: undefined,
            pageSize: 25,
            pageNumber: 1
          },
          customFilterEnabled: false,
          showMoreEnabled: false
        },
        lettersApi: {
          queries: {},
          mutations: {},
          provided: {},
          subscriptions: {},
          config: {
            online: true,
            focused: true,
            middlewareRegistered: false,
            refetchOnFocus: false,
            refetchOnReconnect: false,
            refetchOnMountOrArgChange: false,
            keepUnusedDataFor: 60,
            reducerPath: 'lettersApi'
          }
        }
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:132:11)

    console.log
      [DEBUG] letters: {
        baseUrl: '',
        selectedIds: [],
        filter: {
          legalEntityIds: undefined,
          letterNumber: undefined,
          typeIds: undefined,
          dateFrom: undefined,
          dateTo: undefined,
          contextSearch: undefined,
          isNotRead: undefined,
          sortDescending: true,
          statuses: undefined,
          territorialDivisionIds: undefined,
          functionalDivisionIds: undefined,
          pageSize: 25,
          pageNumber: 1
        },
        customFilterEnabled: false,
        showMoreEnabled: false
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:133:11)

    console.log
      [DEBUG] filter: {
        legalEntityIds: undefined,
        letterNumber: undefined,
        typeIds: undefined,
        dateFrom: undefined,
        dateTo: undefined,
        contextSearch: undefined,
        isNotRead: undefined,
        sortDescending: true,
        statuses: undefined,
        territorialDivisionIds: undefined,
        functionalDivisionIds: undefined,
        pageSize: 25,
        pageNumber: 1
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:134:11)

    console.log
      [DEBUG] after click Дата создания, DOM: <div><div id="root"><div><div class="_container_1grsd_1"><button class="_filter_14ubz_1" data-testid="filter-title"><span class="_filter__title_14ubz_38">Дата создания</span><span><span class="_icon_jjhlg_1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34326 10.3431L8.00012 4.68629L13.657 10.3431" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></span></button><div class="_wrap

      at Object.log (stories/Letters/LettersFilters.test.tsx:138:11)

    console.log
      [DEBUG] todayBtn: BUTTON Сегодня

      at Object.log (stories/Letters/LettersFilters.test.tsx:146:11)

    console.error
      Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'dateFrom')]
          at reportException (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\helpers\runtime-script-errors.js:66:24)
          at innerInvokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:353:9)  
          at invokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)       
          at HTMLUnknownElementImpl._dispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
          at HTMLUnknownElementImpl.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
          at HTMLUnknownElement.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
          at Object.invokeGuardedCallbackDev (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3994:16)     
          at invokeGuardedCallback (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:4056:31)
          at invokeGuardedCallbackAndCatchFirstError (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:4070:25)
          at executeDispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8243:3)
          at processDispatchQueueItemsInOrder (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8275:7)     
          at processDispatchQueue (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8288:5)
          at dispatchEventsForPlugins (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8299:3)
          at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8508:12
          at batchedEventUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22396:12)
          at batchedEventUpdates (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3745:12)
          at dispatchEventForPluginEventSystem (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8507:3)    
          at attemptToDispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:6005:3)
          at dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:5924:19)
          at unstable_runWithPriority (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\scheduler\cjs\scheduler.development.js:468:12)
          at runWithPriority$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:11276:10)
          at discreteUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22413:14)
          at discreteUpdates (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3756:12)
          at dispatchDiscreteEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:5889:3)
          at HTMLDivElement.callTheUserObjectsOperation (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
          at innerInvokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:350:25) 
          at invokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)       
          at HTMLButtonElementImpl._dispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
          at HTMLButtonElementImpl.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
          at HTMLButtonElement.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
          at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:19:20        
          at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:66:16
          at batchedUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22380:12)
          at act (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom-test-utils.development.js:1042:14)
          at Object.eventWrapper (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:65:28)
          at fireEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:12:35)
          at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:110:36)
          at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\fire-event.js:18:52)
          at Object.click (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\stories\Letters\LettersFilters.test.tsx:150:15) {
        detail: TypeError: Cannot read properties of undefined (reading 'dateFrom')
            at Object._ [as onClick] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\domrf-ui\src\Molecule\DateSearch\DateSearch.tsx:293:32)     
            at i (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\domrf-ui\src\Atom\Button\Button.tsx:43:28)
            at HTMLUnknownElement.callCallback (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3945:14)   
            at HTMLUnknownElement.callTheUserObjectsOperation (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
            at innerInvokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:350:25)
            at invokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)     
            at HTMLUnknownElementImpl._dispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
            at HTMLUnknownElementImpl.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
            at HTMLUnknownElement.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
            at Object.invokeGuardedCallbackDev (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3994:16)   
            at invokeGuardedCallback (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:4056:31)
            at invokeGuardedCallbackAndCatchFirstError (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:4070:25)
            at executeDispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8243:3)
            at processDispatchQueueItemsInOrder (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8275:7)   
            at processDispatchQueue (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8288:5)
            at dispatchEventsForPlugins (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8299:3)
            at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8508:12
            at batchedEventUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22396:12)
            at batchedEventUpdates (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3745:12)
            at dispatchEventForPluginEventSystem (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8507:3)  
            at attemptToDispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:6005:3)
            at dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:5924:19)
            at unstable_runWithPriority (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\scheduler\cjs\scheduler.development.js:468:12)
            at runWithPriority$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:11276:10)
            at discreteUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22413:14)
            at discreteUpdates (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3756:12)
            at dispatchDiscreteEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:5889:3)
            at HTMLDivElement.callTheUserObjectsOperation (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
            at innerInvokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:350:25)
            at invokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)     
            at HTMLButtonElementImpl._dispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
            at HTMLButtonElementImpl.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
            at HTMLButtonElement.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
            at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:19:20      
            at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:66:16
            at batchedUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22380:12)
            at act (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom-test-utils.development.js:1042:14)
            at Object.eventWrapper (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:65:28)
            at fireEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:12:35)
            at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:110:36)
            at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\fire-event.js:18:52)
            at Object.click (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\stories\Letters\LettersFilters.test.tsx:150:15),
        type: 'unhandled exception'
      }

      148 |
      149 |   try {
    > 150 |     fireEvent.click(todayBtn);
          |               ^
      151 |     console.log('[DEBUG] after click Сегодня — OK');
      152 |     console.log('[DEBUG] filter after Сегодня:', storeRef.store?.getState()?.letters?.filter);
      153 |   } catch (e) {

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:3994:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4056:31)
      at invokeGuardedCallbackAndCatchFirstError (node_modules/react-dom/cjs/react-dom.development.js:4070:25)
      at executeDispatch (node_modules/react-dom/cjs/react-dom.development.js:8243:3)
      at processDispatchQueueItemsInOrder (node_modules/react-dom/cjs/react-dom.development.js:8275:7)
      at processDispatchQueue (node_modules/react-dom/cjs/react-dom.development.js:8288:5)
      at dispatchEventsForPlugins (node_modules/react-dom/cjs/react-dom.development.js:8299:3)
      at node_modules/react-dom/cjs/react-dom.development.js:8508:12
      at batchedEventUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:22396:12)
      at batchedEventUpdates (node_modules/react-dom/cjs/react-dom.development.js:3745:12)
      at dispatchEventForPluginEventSystem (node_modules/react-dom/cjs/react-dom.development.js:8507:3)
      at attemptToDispatchEvent (node_modules/react-dom/cjs/react-dom.development.js:6005:3)
      at dispatchEvent (node_modules/react-dom/cjs/react-dom.development.js:5924:19)
      at unstable_runWithPriority (node_modules/scheduler/cjs/scheduler.development.js:468:12)
      at runWithPriority$1 (node_modules/react-dom/cjs/react-dom.development.js:11276:10)
      at discreteUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:22413:14)
      at discreteUpdates (node_modules/react-dom/cjs/react-dom.development.js:3756:12)
      at dispatchDiscreteEvent (node_modules/react-dom/cjs/react-dom.development.js:5889:3)
      at HTMLDivElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLButtonElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLButtonElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLButtonElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:19:20
      at node_modules/@testing-library/react/dist/pure.js:66:16
      at batchedUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:22380:12)
      at act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:1042:14)
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:65:28)
      at fireEvent (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:18:52)
      at Object.click (stories/Letters/LettersFilters.test.tsx:150:15)

    console.error
      Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'dateFrom')]
          at reportException (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\helpers\runtime-script-errors.js:66:24)      
          at innerInvokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:353:9)  
          at invokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)       
          at HTMLButtonElementImpl._dispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
          at HTMLButtonElementImpl.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
          at HTMLButtonElement.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
          at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:19:20        
          at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:66:16
          at batchedUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22380:12)
          at act (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom-test-utils.development.js:1042:14)
          at Object.eventWrapper (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:65:28)
          at fireEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:12:35)
          at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:110:36)
          at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\fire-event.js:18:52)
          at Object.click (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\stories\Letters\LettersFilters.test.tsx:150:15) {
        detail: TypeError: Cannot read properties of undefined (reading 'dateFrom')
            at Object._ [as onClick] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\domrf-ui\src\Molecule\DateSearch\DateSearch.tsx:293:32)     
            at i (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\domrf-ui\src\Atom\Button\Button.tsx:43:28)
            at HTMLUnknownElement.callCallback (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3945:14)   
            at HTMLUnknownElement.callTheUserObjectsOperation (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
            at innerInvokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:350:25)
            at invokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)     
            at HTMLUnknownElementImpl._dispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
            at HTMLUnknownElementImpl.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
            at HTMLUnknownElement.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
            at Object.invokeGuardedCallbackDev (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3994:16)   
            at invokeGuardedCallback (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:4056:31)
            at invokeGuardedCallbackAndCatchFirstError (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:4070:25)
            at executeDispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8243:3)
            at processDispatchQueueItemsInOrder (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8275:7)   
            at processDispatchQueue (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8288:5)
            at dispatchEventsForPlugins (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8299:3)
            at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8508:12
            at batchedEventUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22396:12)
            at batchedEventUpdates (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3745:12)
            at dispatchEventForPluginEventSystem (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:8507:3)  
            at attemptToDispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:6005:3)
            at dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:5924:19)
            at unstable_runWithPriority (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\scheduler\cjs\scheduler.development.js:468:12)
            at runWithPriority$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:11276:10)
            at discreteUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22413:14)
            at discreteUpdates (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:3756:12)
            at dispatchDiscreteEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:5889:3)
            at HTMLDivElement.callTheUserObjectsOperation (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
            at innerInvokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:350:25)
            at invokeEventListeners (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:286:3)     
            at HTMLButtonElementImpl._dispatch (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:233:9)
            at HTMLButtonElementImpl.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:104:17)
            at HTMLButtonElement.dispatchEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:241:34)
            at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:19:20      
            at C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:66:16
            at batchedUpdates$1 (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom.development.js:22380:12)
            at act (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\react-dom\cjs\react-dom-test-utils.development.js:1042:14)
            at Object.eventWrapper (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\pure.js:65:28)
            at fireEvent (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:12:35)
            at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\node_modules\@testing-library\dom\dist\events.js:110:36)
            at Function.fireEvent.<computed> [as click] (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\node_modules\@testing-library\react\dist\fire-event.js:18:52)
            at Object.click (C:\Users\ai.ostrovskiy\Documents\elk\letter\bank-front\stories\Letters\LettersFilters.test.tsx:150:15),
        type: 'unhandled exception'
      }

      148 |
      149 |   try {
    > 150 |     fireEvent.click(todayBtn);
          |               ^
      151 |     console.log('[DEBUG] after click Сегодня — OK');
      152 |     console.log('[DEBUG] filter after Сегодня:', storeRef.store?.getState()?.letters?.filter);
      153 |   } catch (e) {

      at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLButtonElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLButtonElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLButtonElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:19:20
      at node_modules/@testing-library/react/dist/pure.js:66:16
      at batchedUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:22380:12)
      at act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:1042:14)
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:65:28)
      at fireEvent (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:18:52)
      at Object.click (stories/Letters/LettersFilters.test.tsx:150:15)

    console.log
      [DEBUG] after click Сегодня — OK

      at Object.log (stories/Letters/LettersFilters.test.tsx:151:13)

    console.log
      [DEBUG] filter after Сегодня: {
        legalEntityIds: undefined,
        letterNumber: undefined,
        typeIds: undefined,
        dateFrom: undefined,
        dateTo: undefined,
        contextSearch: undefined,
        isNotRead: undefined,
        sortDescending: true,
        statuses: undefined,
        territorialDivisionIds: undefined,
        functionalDivisionIds: undefined,
        pageSize: 25,
        pageNumber: 1
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:152:13)

    console.log
      [DEBUG] applyBtn after Сегодня: <ref *1> HTMLButtonElement {
        '__reactFiber$ynj7rlr2an': <ref *2> FiberNode {
          tag: 5,
          key: null,
          elementType: 'button',
          type: 'button',
          stateNode: [Circular *1],
          return: FiberNode {
            tag: 0,
            key: null,
            elementType: [Function: au],
            type: [Function: au],
            stateNode: null,
            return: [FiberNode],
            child: [Circular *2],
            sibling: null,
            index: 1,
            ref: null,
            pendingProps: [Object],
            memoizedProps: [Object],
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 0,
            flags: 1,
            nextEffect: null,
            firstEffect: null,
            lastEffect: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugID: 3214,
            _debugSource: null,
            _debugOwner: [FiberNode],
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          child: FiberNode {
            tag: 6,
            key: null,
            elementType: null,
            type: null,
            stateNode: [Text],
            return: [Circular *2],
            child: null,
            sibling: null,
            index: 0,
            ref: null,
            pendingProps: 'Применить',
            memoizedProps: 'Применить',
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 0,
            flags: 0,
            nextEffect: null,
            firstEffect: null,
            lastEffect: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugID: 3221,
            _debugSource: null,
            _debugOwner: null,
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          sibling: null,
          index: 0,
          ref: null,
          pendingProps: {
            disabled: false,
            onClick: [Function: F],
            'data-testid': 'filter-apply-button',
            children: [Array],
            className: '_button_19pqd_1 _button_white_19pqd_39'
          },
          memoizedProps: {
            disabled: false,
            onClick: [Function: F],
            'data-testid': 'filter-apply-button',
            children: [Array],
            className: '_button_19pqd_1 _button_white_19pqd_39'
          },
          updateQueue: null,
          memoizedState: null,
          dependencies: null,
          mode: 0,
          flags: 0,
          nextEffect: null,
          firstEffect: null,
          lastEffect: null,
          lanes: 0,
          childLanes: 0,
          alternate: null,
          actualDuration: 0,
          actualStartTime: -1,
          selfBaseDuration: 0,
          treeBaseDuration: 0,
          _debugID: 3219,
          _debugSource: null,
          _debugOwner: FiberNode {
            tag: 0,
            key: null,
            elementType: [Function: au],
            type: [Function: au],
            stateNode: null,
            return: [FiberNode],
            child: [Circular *2],
            sibling: null,
            index: 1,
            ref: null,
            pendingProps: [Object],
            memoizedProps: [Object],
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 0,
            flags: 1,
            nextEffect: null,
            firstEffect: null,
            lastEffect: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugID: 3214,
            _debugSource: null,
            _debugOwner: [FiberNode],
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          _debugNeedsRemount: false,
          _debugHookTypes: null
        },
        '__reactProps$ynj7rlr2an': {
          disabled: false,
          onClick: [Function: F],
          'data-testid': 'filter-apply-button',
          children: [ 'Применить', false ],
          className: '_button_19pqd_1 _button_white_19pqd_39'
        },
        [Symbol(SameObject caches)]: [Object: null prototype] { childNodes: NodeList {} }
      } disabled: false

      at Object.log (stories/Letters/LettersFilters.test.tsx:159:11)

    console.log
      [DEBUG] clicking Применить...

      at Object.log (stories/Letters/LettersFilters.test.tsx:162:11)

    console.log
      [DEBUG] after Применить, filter: {
        legalEntityIds: undefined,
        letterNumber: undefined,
        typeIds: undefined,
        dateFrom: undefined,
        dateTo: undefined,
        contextSearch: undefined,
        isNotRead: undefined,
        sortDescending: true,
        statuses: undefined,
        territorialDivisionIds: undefined,
        functionalDivisionIds: undefined,
        pageSize: 25,
        pageNumber: 1
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:167:11)

    console.log
      [DEBUG] finding Дата создания again...

      at Object.log (stories/Letters/LettersFilters.test.tsx:169:11)

    console.log
      [DEBUG] clicked Дата создания, finding Сбросить...

      at Object.log (stories/Letters/LettersFilters.test.tsx:171:11)

    console.log
      [DEBUG] found Сбросить, clicking...

      at Object.log (stories/Letters/LettersFilters.test.tsx:175:11)

    console.log
      [DEBUG] after Сбросить, filter: {
        legalEntityIds: undefined,
        letterNumber: undefined,
        typeIds: undefined,
        dateFrom: undefined,
        dateTo: undefined,
        contextSearch: undefined,
        isNotRead: undefined,
        sortDescending: true,
        statuses: undefined,
        territorialDivisionIds: undefined,
        functionalDivisionIds: undefined,
        pageSize: 25,
        pageNumber: 1
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:178:13)

    console.log
      [DEBUG] checking final state...

      at Object.log (stories/Letters/LettersFilters.test.tsx:183:11)

    console.log
      [DEBUG] getLetters(): {
        baseUrl: '',
        selectedIds: [],
        filter: {
          legalEntityIds: undefined,
          letterNumber: undefined,
          typeIds: undefined,
          dateFrom: undefined,
          dateTo: undefined,
          contextSearch: undefined,
          isNotRead: undefined,
          sortDescending: true,
          statuses: undefined,
          territorialDivisionIds: undefined,
          functionalDivisionIds: undefined,
          pageSize: 25,
          pageNumber: 1
        },
        customFilterEnabled: false,
        showMoreEnabled: false
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:184:11)

    console.log
      [DEBUG] getLetters().filter: {
        legalEntityIds: undefined,
        letterNumber: undefined,
        typeIds: undefined,
        dateFrom: undefined,
        dateTo: undefined,
        contextSearch: undefined,
        isNotRead: undefined,
        sortDescending: true,
        statuses: undefined,
        territorialDivisionIds: undefined,
        functionalDivisionIds: undefined,
        pageSize: 25,
        pageNumber: 1
      }

      at Object.log (stories/Letters/LettersFilters.test.tsx:185:11)

  ● Фильтр даты вкладка черновики

    TypeError: Cannot read properties of undefined (reading 'dateFrom')

      148 |
      149 |   try {
    > 150 |     fireEvent.click(todayBtn);
          |               ^
      151 |     console.log('[DEBUG] after click Сегодня — OK');
      152 |     console.log('[DEBUG] filter after Сегодня:', storeRef.store?.getState()?.letters?.filter);
      153 |   } catch (e) {

      at Object._ [as onClick] (node_modules/domrf-ui/src/Molecule/DateSearch/DateSearch.tsx:293:32)
      at i (node_modules/domrf-ui/src/Atom/Button/Button.tsx:43:28)
      at HTMLUnknownElement.callCallback (node_modules/react-dom/cjs/react-dom.development.js:3945:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-dom/cjs/react-dom.development.js:3994:16)
      at invokeGuardedCallback (node_modules/react-dom/cjs/react-dom.development.js:4056:31)
      at invokeGuardedCallbackAndCatchFirstError (node_modules/react-dom/cjs/react-dom.development.js:4070:25)
      at executeDispatch (node_modules/react-dom/cjs/react-dom.development.js:8243:3)
      at processDispatchQueueItemsInOrder (node_modules/react-dom/cjs/react-dom.development.js:8275:7)
      at processDispatchQueue (node_modules/react-dom/cjs/react-dom.development.js:8288:5)
      at dispatchEventsForPlugins (node_modules/react-dom/cjs/react-dom.development.js:8299:3)
      at node_modules/react-dom/cjs/react-dom.development.js:8508:12
      at batchedEventUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:22396:12)
      at batchedEventUpdates (node_modules/react-dom/cjs/react-dom.development.js:3745:12)
      at dispatchEventForPluginEventSystem (node_modules/react-dom/cjs/react-dom.development.js:8507:3)
      at attemptToDispatchEvent (node_modules/react-dom/cjs/react-dom.development.js:6005:3)
      at dispatchEvent (node_modules/react-dom/cjs/react-dom.development.js:5924:19)
      at unstable_runWithPriority (node_modules/scheduler/cjs/scheduler.development.js:468:12)
      at runWithPriority$1 (node_modules/react-dom/cjs/react-dom.development.js:11276:10)
      at discreteUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:22413:14)
      at discreteUpdates (node_modules/react-dom/cjs/react-dom.development.js:3756:12)
      at dispatchDiscreteEvent (node_modules/react-dom/cjs/react-dom.development.js:5889:3)
      at HTMLDivElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
      at HTMLButtonElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
      at HTMLButtonElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
      at HTMLButtonElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
      at node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:19:20
      at node_modules/@testing-library/react/dist/pure.js:66:16
      at batchedUpdates$1 (node_modules/react-dom/cjs/react-dom.development.js:22380:12)
      at act (node_modules/react-dom/cjs/react-dom-test-utils.development.js:1042:14)
      at Object.eventWrapper (node_modules/@testing-library/react/dist/pure.js:65:28)
      at fireEvent (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:12:35)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/node_modules/@testing-library/dom/dist/events.js:110:36)
      at Function.fireEvent.<computed> [as click] (node_modules/@testing-library/react/dist/fire-event.js:18:52)
      at Object.click (stories/Letters/LettersFilters.test.tsx:150:15)

 PASS  stories/Letters/LettersFromBank/LettersFromBankPagePositive.test.tsx (16.437 s)
  ● Console

    console.warn
      ⚠️ React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` futur
e flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.

      33 |
      34 | test('Рендер писем из банка вкладка по умолчанию', async () => {
    > 35 |   render(<LettersFromBankPage actionsEnabled />, {
         |         ^
      36 |     wrapper: storeRef.wrapper!,
      37 |   });
