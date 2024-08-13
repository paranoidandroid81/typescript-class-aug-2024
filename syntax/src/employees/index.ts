import { Brand, Err, Ok, Result } from "../utils";

export function doSomethingWithAnEmployee(id: EmployeeId) {
  // make an API call, something expensive
}

// mapped literal type
export type EmployeeId =
  | `X${string}`
  | `x${string}`
  | `A${string}`
  | `a${string}`;

export function isValidEmployeeId(id: string): id is EmployeeId {
  return (
    id.startsWith("x") ||
    id.startsWith("X") ||
    id.startsWith("A") ||
    id.startsWith("a")
  );
}

type TechId = Brand<string, "TechId">;
type ApiError = {
  status: number;
  message: string;
};

export function verifyTechId(candidateId: string): Result<TechId, ApiError> {
  const isValid = candidateId.startsWith("T");
  if (isValid) {
    return Ok(candidateId as TechId);
  } else {
    return Err({ status: 404, message: "We fired that dude" });
  }
}

export function doSomethingWithATech(id: TechId) {}

export function assignTechToCustomerIssue(assignment: {
  techId: string;
  issueId: string;
  customerId: string;
}) {}
