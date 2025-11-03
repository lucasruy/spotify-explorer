'use client';

import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Resolver, SubmitHandler, useForm, useWatch } from 'react-hook-form';

import { Button, Input, Select, type SelectOption } from '@/shared/ui';

import {
  artistListingFiltersDefaultValues,
  artistListingFiltersSchema,
  sanitizeArtistListingFilters,
  type ArtistListingFiltersForm,
} from '../../model';

type ArtistListingFiltersProps = {
  initialValues?: ArtistListingFiltersForm;
  onSubmit: (values: ArtistListingFiltersForm) => void;
  labels: {
    title: string;
    description?: string;
    artistName: {
      label: string;
      placeholder: string;
    };
    genre: {
      label: string;
      placeholder: string;
    };
    actions: {
      apply: string;
      clear: string;
    };
  };
  isSubmitting?: boolean;
  genreOptions: SelectOption[];
};

export const ArtistListingFilters = ({
  initialValues,
  onSubmit,
  labels,
  isSubmitting,
  genreOptions,
}: ArtistListingFiltersProps) => {
  const resolver = zodResolver(artistListingFiltersSchema) as Resolver<
    ArtistListingFiltersForm
  >;

  const form = useForm<ArtistListingFiltersForm>({
    resolver,
    defaultValues: initialValues ?? artistListingFiltersDefaultValues,
  });

  const watchedValues = useWatch({
    control: form.control,
    defaultValue: artistListingFiltersDefaultValues,
  });
  const hasActiveFilters = Boolean(
    watchedValues?.artistName?.trim() ||
      watchedValues?.genre !== artistListingFiltersDefaultValues.genre
  );

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
      return;
    }

    form.reset(artistListingFiltersDefaultValues);
  }, [form, initialValues]);

  const submitForm: SubmitHandler<ArtistListingFiltersForm> = formValues => {
    const sanitized = sanitizeArtistListingFilters(formValues);
    form.reset(sanitized);
    onSubmit(sanitized);
  };

  const handleClear = () => {
    form.reset(artistListingFiltersDefaultValues);
    onSubmit(artistListingFiltersDefaultValues);
  };

  return (
    <section className="flex flex-col gap-2 space-y-3 md:flex-row md:justify-between md:gap-6">
      <div className="space-y-1">
        <h2 className="text-muted-foreground text-xs font-semibold tracking-[0.25em] uppercase">
          {labels.title}
        </h2>
        {labels.description ? (
          <p className="text-muted-foreground text-sm">{labels.description}</p>
        ) : null}
      </div>

      <form
        onSubmit={form.handleSubmit(submitForm)}
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center"
      >
        <Input
          className="w-full sm:w-60"
          placeholder={labels.artistName.placeholder}
          disabled={isSubmitting}
          aria-label={labels.artistName.label}
          {...form.register('artistName')}
        />
        <Select
          className="w-full sm:w-48"
          options={genreOptions}
          disabled={isSubmitting}
          aria-label={labels.genre.label}
          {...form.register('genre')}
        />

        <div className="flex gap-2 sm:ml-auto">
          <Button
            type="button"
            variant="secondary"
            disabled={!hasActiveFilters || isSubmitting}
            onClick={handleClear}
          >
            {labels.actions.clear}
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {labels.actions.apply}
          </Button>
        </div>
      </form>
    </section>
  );
};
