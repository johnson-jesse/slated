import { Slate, SlateAction } from "./Slated.type";

export const initialSlate: Slate = {
  project: "My YouTube Video",
  segment: "Hook",
  take: 1,
  isRolling: false,
  duration: null,
  timestamp: 0,
  notes: [],
  camera: "LUMIX S1H",
};

export function slateReducer(state: Slate, action: SlateAction): Slate {
  switch (action.type) {
    case "ROLL":
      return {
        ...state,
        isRolling: true,
        duration: null,
      };

    case "CUT": {
      return {
        ...state,
        isRolling: false,
        // duration: state.startedAt ? now - state.startedAt : null,
        take: state.take + 1,
        // startedAt: null,
      };
    }

    case "NEXT_TAKE":
      return {
        ...state,
        take: state.take + 1,
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.note],
      };

    case "SET_PROJECT":
      return {
        ...state,
        project: action.project,
      };

    case "SET_SEGMENT":
      return {
        ...state,
        segment: action.segment,
      };

    case "SET_CAMERA":
      return {
        ...state,
        camera: action.camera,
      };

    case "RESET":
      return {
        ...initialSlate,
        timestamp: 0,
      };

    case "TIMESTAMP":
      return {
        ...state,
        timestamp: action.now,
      };

    default:
      return state;
  }
}
