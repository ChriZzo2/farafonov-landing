
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
        '__reactFiber$0ynxt9em89th': <ref *2> FiberNode {
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
        '__reactProps$0ynxt9em89th': {
          disabled: false,
          onClick: [Function: F],
          'data-testid': 'filter-apply-button',
          children: [ 'Применить', false ],
          className: '_button_19pqd_1 _button_white_19pqd_39'
        },
        [Symbol(SameObject caches)]: [Object: null prototype] { childNodes: NodeList {} }
      } disabled: false

      at Object.log (stories/Letters/LettersFilters.test.tsx:159:11)

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
