import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

export function useStatusParam() {
	return useQueryState("status", parseAsString.withDefault("all"));
}

export function useFavoriteNumberParam() {
	return useQueryState("favoriteNumber", parseAsInteger.withDefault(0));
}
